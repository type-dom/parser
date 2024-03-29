/* Copyright 2018 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// The code for XMLParserBase copied from
// https://github.com/mozilla/shumway/blob/16451d8836fa85f4b16eeda8b4bda2fa9e2b22b0/src/avm2/natives/xml.ts
// pdf.js

import { XMLParserErrorCode } from './XMLParserErrorCode';
import { IParserParam, INodeAttr } from './interface';
import { XMLParserBase } from './xml-parser.abstract';
import { TypeDOMNode as XNode } from './type-dom-node.class';
import { isWhitespaceString } from './isWhitespaceString';
export class TypeNodeParser extends XMLParserBase {
  private _currentFragment: XNode[];
  private _stack: XNode[][];
  private _errorCode: number;
  private _hasAttributes: boolean;
  private _lowerCaseName: boolean;
  constructor({ hasAttributes = true, lowerCaseName = false }: IParserParam) {
    super();
    this._currentFragment = [];
    this._stack = [];
    this._errorCode = XMLParserErrorCode.NoError;
    this._hasAttributes = hasAttributes;
    this._lowerCaseName = lowerCaseName;
  }

  parseFromString(data: string): undefined | XNode {
    this._currentFragment = [];
    this._stack = [];
    this._errorCode = XMLParserErrorCode.NoError;

    this.parseXml(data);

    if (this._errorCode !== XMLParserErrorCode.NoError) {
      return undefined; // return undefined on error
    }

    // We should only have one root.
    const [documentElement] = this._currentFragment;
    if (!documentElement) {
      return undefined; // Return undefined if no root was found.
    }
    return documentElement;
  }
  // 文本节点
  onText(text: string): void {
    if (isWhitespaceString(text)) {
      return;
    }
    const node = new XNode({ nodeValue: text });
    this._currentFragment.push(node);
  }

  onCdata(text: string): void {
    const node = new XNode({
      nodeValue: text
    });
    this._currentFragment.push(node);
  }

  onBeginElement(name: string, attributes: INodeAttr[], isEmpty?: boolean): void {
    if (this._lowerCaseName) {
      name = name.toLowerCase();
    }
    const node = new XNode({
      nodeName: name
    });
    node.childNodes = [];
    if (this._hasAttributes) {
      node.attributes = attributes;
    }
    this._currentFragment.push(node);
    if (isEmpty) {
      return;
    }
    this._stack.push(this._currentFragment);
    this._currentFragment = node.childNodes;
  }

  onEndElement(name?: string): null | XNode {
    this._currentFragment = this._stack?.pop() || [];
    const lastElement = this._currentFragment?.at(-1);
    if (!lastElement) {
      return null;
    }
    for (const childNode of (lastElement.childNodes || [])) {
      childNode.parentNode = lastElement;
    }
    return lastElement;
  }

  onError(code: number): void {
    this._errorCode = code;
  }
}

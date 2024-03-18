import { INodeAttr } from './interface';
//  todo XNode
export class TypeDOMNode {
  className: 'TypeDOMNode';
  nodeName?: string; // tagName
  nodeValue: string | undefined;
  childNodes: TypeDOMNode[] = [];
  parentNode: TypeDOMNode | null;
  attributes: INodeAttr[] = [];
  parent: undefined;
  dom?: HTMLElement | SVGElement | Text;
  constructor(option?: {nodeName?: string, nodeValue?: string
}) {
    this.className = 'TypeDOMNode';
    this.nodeName = option?.nodeName;
    // this.dom = document.createElement(this.nodeName);
    this.nodeValue = option?.nodeValue;
    this.parentNode = null;
    // Object.defineProperty(this, 'parentNode', { value: null, writable: true });
  }
  get children() {
    return this.childNodes || [];
  }
  createItem(parent: TypeDOMNode) {
    return new TypeDOMNode({ nodeName: 'div' }); // todo
  }
  render() {
  //   todo
  }
}

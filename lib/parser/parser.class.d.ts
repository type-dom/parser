import { INodeAttr, TextNode, TypeNode, XElement } from 'type-dom.ts';
import { IContent, IInstruction, IParam } from './parser.interface';
export declare class Parser {
    private _currentFragment;
    private _stack;
    private _errorCode;
    private readonly _hasAttributes;
    private readonly _lowerCaseName;
    constructor({ hasAttributes, lowerCaseName }: IParam);
    _resolveEntities(s: string): string;
    _parseContent(s: string, start: number): IContent | null;
    _parseProcessingInstruction(s: string, start: number): IInstruction;
    parseDom(s: string): void;
    onResolveEntity(name: string): string;
    onPi(name: string, value: string): void;
    onComment(text: string): void;
    onDoctype(doctypeContent: string): void;
    parseFromString(data: string): TypeNode | undefined;
    onText(text: string): void;
    onCdata(text: string): void;
    onBeginElement(name: string, attributes: INodeAttr[], isEmpty?: boolean): void;
    onEndElement(name?: string): (XElement | TextNode) | null;
    onError(code: number): void;
}

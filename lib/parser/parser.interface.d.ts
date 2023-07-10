import { INodeAttr } from 'type-dom.ts';
export interface IContent {
    name: string;
    attributes: INodeAttr[];
    parsed: number;
}
export interface IInstruction {
    name: string;
    value: string;
    parsed: number;
}
export interface IComponent {
    pos: number;
    name: string;
}
export interface IParam {
    hasAttributes?: boolean;
    lowerCaseName?: boolean;
}

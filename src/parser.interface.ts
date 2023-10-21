import { INodeAttr } from 'type-dom.ts';
export interface IContent {
  name: string,
  attributes: INodeAttr[], // ToDo 为什么用数组方式，而不是键值对？？？？
  parsed: number,
}
export interface IInstruction {
  name: string,
  value: string,
  parsed: number,
}
export interface IComponent {
  pos: number,
  name: string,
}
export interface IParam {
  hasAttributes?: boolean,
  lowerCaseName?: boolean,
}

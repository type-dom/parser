
export interface IParserParam {
  hasAttributes?: boolean,
  lowerCaseName?: boolean,
}
export interface INodeAttr {
  name: string,
  value: string;
}
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

import { parser } from './parser';
import { deepClone } from '@type-dom/utils';
import { TypeNodeParser } from '../index';

describe('parser', () => {
  const nodeParser = new TypeNodeParser({});
  console.log('nodeParser is ', nodeParser);
  const htmlStr = `<div name="division" title="title"> hello </div>`
  const node = nodeParser.parseFromString(htmlStr);
  console.log('node is ', node);
  const copyNode = deepClone(node);
  console.log('copyNode is ', copyNode)
  it('should work', () => {
    expect(parser()).toEqual('type-node-parser');
  });
});

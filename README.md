# Parser

一个基于TypeDom框架的Dom解析器。将DOM字符串解析为TypeDom的Node对象。

## Installation

```bash
# or pnpm or yarn
npm install @type-dom/parser
```

## Usage

### use the lib

```ts
import { TypeNodeParser } from '@type-dom/parser';

const svgStr = '<svg><circle cx="100" cy="50" r="40"/></svg>';
const parser = new TypeNodeParser();
const svgDom = parser.parseFromString(svgStr);
console.log(svgDom);

```
## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2013-present, xjf7711

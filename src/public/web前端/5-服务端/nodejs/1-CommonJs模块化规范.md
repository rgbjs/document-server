## 模块化

一个 JS 文件即一个模块

使用 `module.exports` 进行暴露

使用 `require()` 进行导入

CommonJs 模块化采用同步导入, 所以在导入过程中会阻塞代码

`require()` 导入的资源之后加载一次, 后续的直接在内存中查找

模块导入相同的资源时是进行复制一份的

CommonJs 模块化支持按需导入

```js
if(true) {
    let modul = require(url)
}
```





### 模块引入

```js
let modul = require(url)
```

- 加载文件方式
  - `.js` fs模块同步读取文件编译执行
  - `.json` fs模块同步读取文件，用 JSON.parse() 解析返回结果
  - `.node` c/c++ 编写的扩展插件，通过dlopen() 方法编译
  - `其他扩展名` 会作为 .js 文件载入
- 如果是文件夹则会默认加载该文件下的 index.js 文件
- 如果是内置模块或者是 npm 安装的第三方模块，直接使用包名字
- npm 引入包时，如果当前文件夹下的 node_modules 没有，则会自动向上查找



### 暴露数据

使用完整的 `module.exports` 可以暴露任何数据

***暴露***

```js
module.exports = {
    a: 1,
    b: 2
}

module.exports.get = () => {
    console.log('get');
}

module.exports.num = 10
```

***导入***

```js
const test = require('url')
console.log(test); // { a: 1, b: 2, get: [Function (anonymous)], num: 10 }
```





**简写暴露 exports**

使用简写的 `exports` 进行暴露不支持覆盖 `exports`  , 若覆盖 `exports` 最终将返回一个空对象

```js
// 支持
let name = 'haha';
let age = 19;
let sex = 'man';

exports.name = name;
exports.age = age;
exports.sex = sex;

// 不支持, 因为exports 进行了覆盖
let name = 'haha';
let age = 19;
let sex = 'man';

exports = {
    name,
    age,
    sex
}
```


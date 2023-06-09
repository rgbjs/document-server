## length属性

length 属性返回的是字符串*码元*的长度 , 而非*码点*

具体原因还是因为字符串编码规范从 `ucs-2` 变更为 `UTF-16` .



**码元:**

在以前js的字符串编码规范是 `ucs-2` , 该规范规定每一个文字对应 `16位(2字节)` 空间 . 

这个 `16位` 的空间被称为 `码元` , 也就是说一个文字对应一个码元 .



**码点:**

后来由于字符量的增加 , `ucs-2` 不足以在表达一些字符 , 于是编码规范更改为 `UTF-16` .

`UTF-16` 规范允许一个文字占用 `16位` (1个码元)的空间 , 也可以占用 `32位` (2个码元)的空间 . 

于是有一些生僻字/特殊的文字/emoji占用了 `2个码元` . 



**影响:**

`length` 属性指的是字符的码元长度 , 当存在一些由两个码元组成的文字时 , length长度和字符长度就不是对等的了.

```js
 var str = '😄'
console.log(str.length) // 2
```

当我们通过length来统计字符串数量时便会发现与实际不符的情况 , 这显然不是我们想要的

并且这种与数量不对等的情况还好会我们截取字符串造成麻烦 .



**解决:**

es6新增了获取字符在Unicode位置(码点)的方法 , 和码点转为字符的方法 . 

分别是 `String.prototype.codePointAt()` 和 `String.fromCodePoint()`

通过这两个方法来判断, 如果Unicode码点超过 65535 的则进行特殊处理 .
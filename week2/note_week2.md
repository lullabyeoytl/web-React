## html:相当于一个树,框架
(Document Object Model, DOM)
Tags should be known:
- h1-h6: headers
- p: paragraph
- a: link
- img: image
- ul: unordered list
- ol: ordered list
- li: list item
- table: table
- thead: table header
- tbody: table body
- tr: table row
- td: table data
- input: input field
- button: button
- form: form
- select: dropdown menu
- option: dropdown option
- textarea: multi-line text input
- style: CSS style sheet
- div: container for other HTML elements

注释方式:
```
 <!-- 注释内容 --> 
 ```

 ## CSS: 样式表, 用来控制HTML元素的外观和布局

选择器: 用来选择HTML元素

样式属性: 用来设置HTML元素的样式

样式值: 用来设置HTML元素的样式属性的具体值

- "#": 选择id属性为特定id的元素
- ".": 选择class属性为特定class的元素
- "element": 选择特定元素

css样式优先级: 内联样式(inline style) > 内部样式(internal style) > 外部样式(external style) >用户样式(user style)> 浏览器默认样式(default style)

## JavaScript: 用来实现网页的动态效果

=== : strong comparison

==: week comparison(尽量避免)

object:类似结构体

array:[]

loop:
- for (let attr in object){}
- for(let item of array){}
- for(let i=0; i<array.length; i++){}


function:
- function myFunction(parameter1, parameter2){
  //code to be executed
}

- const myFunction = function(parameter1, parameter2){
  //code to be executed
}

- const myFunction = (parameter1, parameter2) => {
  //code to be executed
}

Typescript: 强类型的JavaScript, 增加代码可读性, 编译时检查类型错误

jQuery: 轻量级的JavaScript库, 提供了大量的DOM操作和事件处理函数, 简化了JavaScript编程

## json: 轻量级的数据交换格式, 易于阅读和编写, 基于JavaScript的对象表示法

## API
make API request:

browser,curl,Postman,javascript

request for json:

fetch():

在用法上，fetch()接受一个 URL 字符串作为参数，默认向该网址发出 GET 请求，返回一个 Promise 对象。它的基本用法如下。

```javascript
fetch(url)
  .then(...)
  .catch(...)

```
下面是一个例子，从服务器获取 JSON 数据。


```javascript
fetch('https://api.github.com/users/ruanyf')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Request Failed', err)); 
```
上面示例中，fetch()接收到的response是一个 Stream 对象，response.json()是一个异步操作，取出所有内容，并将其转为 JSON 对象。

Promise 可以使用 await 语法改写，使得语义更清晰。

```javascript
async function getJSON() {
  let url = 'https://api.github.com/users/ruanyf';
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('Request Failed', error);
  }
}
```

上面示例中，await语句必须放在try...catch里面，这样才能捕捉异步操作中可能发生的错误。

后文都采用await的写法，不使用.then()的写法。

fetch()是异步的

具体内容可参照这篇笔记:
<a>https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html</a>



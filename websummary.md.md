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

## declarative programming in javascript

- imperative programming: describes how to solve a problem by step-by-step instructions
- declarative programming: describes what the problem is, without specifying how to solve it    

example： 

```javascript   
// imperative programming
let arr = [1, 2, 3, 4, 5];          
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// declarative programming          
let arr = [1, 2, 3, 4, 5];          
arr.forEach(console.log);

``` 

filter() and map() are also common declarative programming methods in JavaScript.

reduce(cb,start):
- cb: callback <b>function</b> that takes two parameters, accumulator and currentValue
- start: initial value of accumulator
  

```javascript       
let arr = [1, 2, 3, 4, 5];          
let sum = arr.reduce((acc, cur) => acc + cur, 0);// acc is the accumulator and cur is the currentValue
console.log(sum); // 15
``` 

## syntax sugar
- `${expr}`:string interpolation` using template literals


```javascript
let name = "John";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);   
// output: My name is John and I am 30 years old.
``` 

- if …… ? ..: ...:   `conditional operator`

```javascript
let x = 10;
let y = 5;
let max = x > y? x : y;
console.log(max); // 10 

```
- ... : create something new with exsiting values(spread operator)
  
  ```javascript
  const defs = {
    erf :"error function",
    pi  : 3.14159265359
  }
  const newDefs = {...defs, sqrt: "square root" }//add new property to defs while keeping the original values by using spread operator
   ```
- ? optional chaining: accessing properties of an object that may or may not exist without throwing an error.
  
  ```javascript
  const person = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA"
    }
  };
  const street = person?.address?.street; // "123 Main St"
  const zip = person?.address?.zip; // undefined
  ```

  - ?? Null Coalescing: if left hand is null or undefined, return right hand value.
  
  ```javascript
  const name = null?? "default name"; // "default name"
  const age = 30?? 0; // 30
  const Is_Enabled = env.IsEnabled?? false; // false if env.IsEnabled is null or undefined.
  ```

## CSS Libraries
- Bootstrap: a popular CSS framework that provides ready-made components for building responsive web pages.


## DOM Manipulation
<a>https://www.w3schools.com/js/js_htmldom_document.asp</a> 
The HTML DOM document object is the owner of all other objects in your web page.
- find elements: document.getElementById / TagName / ClassName()
- add elements:
  <ol> 
   <li> document.createElement("div") : create a new element(div) node
   <li>document.createTextNode() : create a new text node
   <li>document.parentNode.appendChild() : add the new node to the parent node
   <li> remove elements: parentNode.removeChild(childNode)
  </ol>
- change elements: 
   element.innerHTML / element.style.property / element.setAttribute()


## javascript debugger:
浏览器是Javascript的调试工具，即f12进入开发者工具页面，可以看到console、network、sources、elements、breakpoints等选项卡，其中console选项卡是调试Javascript的最常用工具，可以输入Javascript代码，执行代码，查看执行结果，还可以设置断点，查看变量值等。



## React --- javascript library for building user interfaces

<a>
https://zh-hans.react.dev/learn</a>

ways to write html in javascript:
- innerHTML（not recommended because it can be dangerous）
     - XSS（跨站脚本攻击，Cross-Site Scripting）是一种安全漏洞，攻击者通过在网页中注入恶意脚本，使得这些脚本在用户的浏览器中执行。这种攻击通常发生在用户输入未被适当过滤或转义的情况下，导致恶意脚本被插入到网页中，从而窃取用户信息、会话令牌或执行其他恶意操作。
- createElement
- template literals

<a href="https://zh-hans.react.dev/learn/tutorial-tic-tac-toe">井字棋教程</a>

- useState：状态钩子，用于在函数组件中存储和更新组件的状态。
  ```javascript
  import React, { useState } from'react';
   const [Something,setSomething] = useState(initialValue);
   // Something is the state variable, setSomething is the state setter function.initalValue is the initial value of the state.
   setSomething(newValue); // update the state
   ```
- set 函数 仅更新 下一次 渲染的状态变量。如果在调用 set 函数后读取状态变量，则 仍会得到在调用之前显示在屏幕上的旧值!
- JavaScript 支持闭包，这意味着内部函数（例如 handleClick）可以访问外部函数（例如 Board）中定义的变量和函数。handleClick 函数可以读取 squares state 并调用 setSquares 方法，因为它们都是在 Board 函数内部定义的。
- () => handleClick(0) 是一个箭头函数，它是定义函数的一种较短的方式。单击方块时，=>“箭头”之后的代码将运行，调用 handleClick(0)
- 需要为每个列表项指定一个 key 属性，以将每个列表项与其兄弟项区分开来。如果你的数据来自数据库，Alexa、Ben 和 Claudia 的数据库 ID 可以用作 key：
``` html
<li key={user.id}>
  {user.name}: {user.taskCount} tasks left
</li>
```
- 重新渲染列表时，React 获取每个列表项的 key 并搜索前一个列表的项以查找匹配的 key。如果当前列表有一个之前不存在的 key，React 会创建一个组件。如果当前列表缺少前一个列表中存在的 key，React 会销毁前一个组件。如果两个 key 匹配，则落子相应的组件。
- **强烈建议在构建动态列表时分配适当的 key**.如果你没有合适的 key，你可能需要考虑重组你的数据，以便你这样做。

## react syntax

- JSX：一种 JavaScript 的语法扩展，它允许我们在 JavaScript 代码中嵌入 HTML。
- props：props 是组件的属性，它是从父组件传递给子组件的输入。
- state：state 是组件的状态，它是组件内部的变量，用于存储组件的当前数据。
<a href="https://zh-hans.react.dev/learn/thinking-in-react">React 思维模式与设计方法</a>

react hook: 即react以函数构成的组件，返回html代码（组件），可以帮助我们在不使用class的情况下实现状态和生命周期。

- useState：状态钩子，用于在函数组件中存储和更新组件的状态。  
- useEffect：useEffect 是一个 hook，它可以让我们在函数组件中执行副作用操作，比如获取数据、设置订阅、添加动画、设置定时器等。  
- useContext：useContext 是一个 hook，它可以让我们在函数组件中获取上下文数据。  
- useRef：useRef 是一个 hook，它可以让我们在函数组件中存储 DOM 节点或其他可变值。  

## useEffect()
useEffect()本身是一个函数，由 React 框架提供，在函数组件内部调用即可。

举例来说，我们希望组件加载以后，网页标题（document.title）会随之改变。那么，改变网页标题这个操作，就是组件的副效应，必须通过useEffect()来实现。

```JSX
import React, { useEffect } from 'react';

function Welcome(props) {
  useEffect(() => {
    document.title = '加载完成';
  });
  return <h1>Hello, {props.name}</h1>;
}
```
上面例子中，useEffect()的参数是一个函数，它就是所要完成的副效应（改变网页标题）。组件加载以后，React 就会执行这个函数。（查看运行结果）

useEffect()的作用就是指定一个副效应函数，组件每渲染一次，该函数就自动执行一次。组件首次在网页 DOM 加载后，副效应函数也会执行。

useEffect() 的第二个参数
有时候，我们不希望useEffect()每次渲染都执行，这时可以使用它的第二个参数，使用一个数组指定副效应函数的依赖项，只有依赖项发生变化，才会重新渲染。


function Welcome(props) {
  useEffect(() => {
    document.title = `Hello, ${props.name}`;
  }, [props.name]);
  return <h1>Hello, {props.name}</h1>;
}
上面例子中，useEffect()的第二个参数是一个数组，指定了第一个参数（副效应函数）的依赖项（props.name）。只有该变量发生变化时，副效应函数才会执行。

如果第二个参数是一个空数组，就表明副效应参数没有任何依赖项。因此，副效应函数这时只会在组件加载进入 DOM 后执行一次，后面组件重新渲染，就不会再次执行。这很合理，由于副效应不依赖任何变量，所以那些变量无论怎么变，副效应函数的执行结果都不会改变，所以运行一次就够了。

七、useEffect() 的用途
只要是副效应，都可以使用useEffect()引入。它的常见用途有下面几种。

获取数据（data fetching）
事件监听或订阅（setting up a subscription）
改变 DOM（changing the DOM）
输出日志（logging）


## Object.keys()

在JSX（JavaScript XML）中，`Object.keys()` 是一个非常有用的方法，用于获取对象自身可枚举属性的数组。虽然JSX主要用于React组件的渲染，但`Object.keys()`可以在React组件的JavaScript逻辑中使用。

以下是一个简单的例子，展示了如何在React组件中使用`Object.keys()`：

```jsx
import React from 'react';

class MyComponent extends React.Component {
  render() {
    const myObject = {
      name: 'Alice',
      age: 30,
      city: 'New York'
    };

    const keys = Object.keys(myObject);

    return (
      <div>
        <h1>Object Keys:</h1>
        <ul>
          {keys.map((key, index) => (
            <li key={index}>{key}: {myObject[key]}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MyComponent;
```

在这个例子中，我们定义了一个对象 `myObject`，然后使用 `Object.keys(myObject)` 获取该对象的所有键，并将其存储在 `keys` 数组中。接着，我们在 `render` 方法中使用 `map` 函数遍历 `keys` 数组，并生成一个包含对象键值对的列表。

这样，你就可以在JSX中使用 `Object.keys()` 来处理对象的键，并在React组件中动态地渲染内容。

## 组件间的传参

假设某组件props中含有attribute，则在调用时用< attribute = {value} />来传参。

例如，在父组件中：

```jsx
<Child attribute={this.state.value} />
```

在子组件中：

```jsx
class Child extends React.Component {
  render() {
    const { attribute } = this.props;
    return <div>{attribute}</div>;
  }
}
```

这样，子组件就可以接收父组件传过来的属性值。        

使用{...value}传参时，可以将父组件的state或props中的所有属性都传给子组件。

例如，在父组件中：

```jsx
<Child {...this.state} />
```

在子组件中：

```jsx
class Child extends React.Component {
  render() {
    const { name, age, city } = this.props;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>City: {city}</p>
      </div>
    );
  }
}
```

这样，子组件就可以接收父组件的所有属性值。

## key属性

在React中，key属性是用来标识元素的唯一性的属性。当子元素被添加、删除、重新排序时，React需要确定元素的位置。如果没有key属性，React会默认使用数组索引来作为key。

key属性的作用主要有两个：

1. 帮助React识别哪些元素改变了，从而只更新变化的元素。
2. 帮助React高效的执行DOM操作。

因此，在开发React组件时，应当给每一个元素添加key属性，以便React可以高效地识别元素。

## React Fragments

React Fragments <></> 是一种特殊的组件，它可以让你将多个元素组合成一个组件。

<></>只是virtual separator，并不会在DOM中渲染任何内容，它只是用来告诉React，其后面的元素应该被视为一个整体。

## useContext Hook:
作用：
在组件树之间数据传递而无需为每一层组件手动添加 props。

用法：

```jsx
import React, { createContext, useState, useContext } from'react';

const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      <Toolbar />
    </MyContext.Provider>
  );
}

function Toolbar() {
  const { count, setCount } = useContext(MyContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <span>{count}</span>
    </div>
  );
}
```

在这个例子中，我们定义了一个 `MyContext` 对象，并使用 `createContext()` 方法创建了一个上下文。然后，我们在 `App` 组件中，使用 `Provider` 组件将 `count` 和 `setCount` 函数传递给 `MyContext`。

在 `Toolbar` 组件中，我们使用 `useContext()` 钩子来获取 `count` 和 `setCount` 函数。这样，我们就不需要在 `Toolbar` 组件中手动地将 `count` 和 `setCount` 传递给子组件，而是可以直接从 `MyContext` 中获取它们。

## Cookies Sessions Local Storage:

- Cookies: 存储在用户浏览器上的小型文本文件，可以存储少量的数据，过期时间可以设置。
- Sessions: 存储在服务器端的会话数据，可以存储大量的数据，过期时间可以设置。
- Local Storage: 存储在用户浏览器上的本地数据，可以存储大量的数据，永不过期。

sessionStorage and localStorage in React:

```jsx
import React, { useState, useEffect } from "react";

function App() {
  const [session, setSession] = useState(sessionStorage.getItem("session") || "");
  const [local, setLocal] = useState(localStorage.getItem("local") || "");

  useEffect(() => {
    sessionStorage.setItem("session", session);
    localStorage.setItem("local", local);
  }, [session, local]);

  return (
    <div>
      <h1>Session Storage</h1>
      <input value={session} onChange={(e) => setSession(e.target.value)} />
      <h1>Local Storage</h1>
      <input value={local} onChange={(e) => setLocal(e.target.value)} />
    </div>
  );
}


```

在这个例子中，我们使用 `useState` 和 `useEffect` 钩子来管理 `session` 和 `local` 状态。我们在 `useEffect` 钩子中，将 `session` 和 `local` 状态同步到 `sessionStorage` 和 `localStorage` 中。

我们还使用 `input` 元素来渲染 `session` 和 `local` 状态，并使用 `onChange` 事件来更新它们。

## React Router:

React Router 是 React 官方提供的路由管理库，它可以帮助我们快速实现单页应用（SPA）的路由功能。

Types of Routers:

1. BrowserRouter: 基于 HTML5 的 History API，可以让我们在浏览器的地址栏中看到 URL 变化。
2. HashRouter: 基于 URL 的 hash 值，可以让我们在 URL 中看到 hash 变化。
3. MemoryRouter: 基于内存的路由，可以让我们在内存中创建路由。根BrowserRouter相同，但不会在地址栏中显示。
4. StaticRouter: 基于静态的路由，可以让我们在服务器端渲染（Server-Side Rendering，SSR）时使用。

Routing:

```jsx
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

    </Routes>
  </BrowserRouter>
</Router>
```

在这个例子中，我们使用 `BrowserRouter` 组件来创建路由。我们在 `Routes` 组件中，使用 `Route` 组件来定义路由。

`Route` 组件的 `path` 属性定义了路由的路径，`element` 属性定义了渲染该路由的组件。

我们还使用 `index` 属性来定义默认路由，当用户访问根路径时，React Router 会渲染 `Home` 组件。


## BrowserOutlet:

<outlet /> :父路由元素中应使用 <Outlet> 来呈现其子路由元素。这样就可以在呈现子路由时显示嵌套用户界面。如果父路由完全匹配，则会呈现子索引路由；如果没有索引路由，则不会呈现任何内容。

```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
  );
}
```
## useNavigate hook


```jsx
import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/somewhere");
  }

  return <button onClick={handleClick}>Go somewhere</button>;
}
```

## persist data permanently and shared with other users

create/read update/delete data via HTTP requests:

Post - create new data
Get - read existing data
Put - update existing data
Delete - delete existing data

Http status codes:

- 200 OK - request was successful
- 201 Created - new resource was created
- 204 No Content - request was successful but no content was returned
- 400 Bad Request - invalid request
- 401 Unauthorized - authentication is required
- 403 Forbidden - access denied
- 404 Not Found - resource not found
- 500 Internal Server Error - server error

https: secure version of http

More than one request when login in:(post api):

The browser will pre-flight (i.e. ask permission first) any complex request like POST ; 

that's why you may see 2 requests in your network log!

This is because of Cross-Origin Resource Sharing (CORS), which can get quite complex!

## Uncontrolled Components:

sometimes don't care about some changes(rather than using useState to track any changes)

**useRef** - a way to store a value that can be changed and read by other components

only concerned about the (current) value, not the state of the component

## Input 

each input should have an id associated with htmlFor of a label

in Bootstrap, form.control has an id associated with html of Form.Label

## Handling user credentials with cookies

 cookies hold a small amount of data that can be sent to the server with each request.

 cookies are used for authentication, session management, and personalization.

 It is managed by the browser, your JavaScript code cannot access it!

## JSON Web Tokens (JWTs)
A cryptographically-signed access token issued by a server for a set period of time (typically short). 

Used in lieu of the username and password directly.

Why? We don't want to be caught holding the user's password (especially in XSS attacks).

## React Native 

React Native is a framework for building native mobile applications using React. It allows developers to use the same JavaScript and React code to build applications for both iOS and Android platforms. React Native uses the same components as React, but instead of rendering HTML, it renders native components such as Views, Text, and Image. React Native also provides a set of APIs for accessing platform-specific features such as the camera, accelerometer, and GPS.
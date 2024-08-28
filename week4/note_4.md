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
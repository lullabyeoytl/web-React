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


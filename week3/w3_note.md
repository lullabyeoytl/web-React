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
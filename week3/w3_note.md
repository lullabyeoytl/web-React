# declarative programming in javascript

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

# syntax sugar
- ${expr}:   `string interpolation` using template literals


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

# CSS Libraries
- Bootstrap: a popular CSS framework that provides ready-made components for building responsive web pages.


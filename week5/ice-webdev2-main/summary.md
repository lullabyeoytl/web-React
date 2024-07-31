1. **You can only return one node... Just wrap it in a div !**

2. fetch data in jsx: 
   never use `fetch` in jsx, use `useEffect` instead.

   ```jsx
   const [data, setData] = useState([]);

   useEffect(() => {
     fetch('https://example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
   }, []);
   ```

   This way, the data is fetched only once when the component mounts, and then the `data` variable is updated whenever the data changes.

   when changing the array, foloowing way is used:

   ```jsx
   .then(data => setData(data)) // update the state with new data,just overwrite the previous data is ok.

   ```

   This way, the previous data is not overwritten, and the new data is added to the existing array.

   rather than using `setState` directly, use `setState` as a function to update the state!

3. React key prop:
   React key prop is used to uniquely identify each element in a list. It is important to use it when rendering lists to avoid unwanted re-renders.

4. const lambda = (props)=>{... return ... }: "lambda function" in jsx

5. Responsive Design(相应式设计):
   React中的相应式设计指不改变Dom结构的情况下，通过数据流来控制
   
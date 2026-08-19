import {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0);
  console.log("Counter");

  return (
    <>

      <h1>Counter Application of mine: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}
export default Counter;
import { useCallback, useState } from 'react'
import Sum from './Sum' ;
import { useMemo } from "react";
import Post from './post';

function App() {
  const [count, setCount] = useState(0)
  const [number,setNumber]=useState(100000);

  // function calculatePrime(){
  //   let total=0;

  //   if(number>1)
  //     total++;

  //   for(let i=3;i<=number;i++){
  //     total++;
  //     for(let j=2 ;j<i;j++){
  //       if(i%j==0){
  //         total--;
  //         break;
  //       }
  //     }
  //   }

  //   return total;

  // }

  const handleClick=useCallback(()=>{
    console.log("hello ji, handle click ",count);    //use callback:function ko yaad rkhta h

  },[count]);
  



  const prime=useMemo(()=>{ 
                                //useMemo : prime ki pichli value ko yaad rkhta h
    let total=0;

    if(number>1)
      total++;

    for(let i=3;i<=number;i++){
      total++;
      for(let j=2 ;j<i;j++){
        if(i%j==0){
          total--;
          break;
        }
      }
    }

    return total;

  },[number]) //dependency array mei number aayega uski ye number pr depend krrha h
  
    const obj=useMemo(()=>{       //ye objects ke elements ko yaad rkega
      return {name:"mansi",age:20};

    },[])


   console.log("app render");

  return (
    <>
      <h1>Counter:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h2>Your Current Number:{number}</h2>
      <button onClick={()=>setNumber(number+10000)}>Increment number</button>
      <h3>Total Prime number: {prime}</h3> 
      <button onClick={handleClick}>Click</button>
      <Sum number={number}></Sum>
      <Post value={obj}></Post> 
    </>
  )
}

export default App

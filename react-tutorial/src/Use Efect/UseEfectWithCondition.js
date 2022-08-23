import React,{useEffect,useState} from 'react'


export default function UseEfectWithCondition() {
    const[data,setData]=useState(100);
    const[count,setCount]=useState(100);
    useEffect(()=>{
console.warn("data is called")
    },[data])
    useEffect(()=>{
        console.warn("count is called")
            },[count])
  return (
    <div>
<h1>Use Efect with Condition </h1>
<h2>Data is : {data}</h2>
<h2>Count is :{count}</h2>

<button onClick={()=>setData(data+1)}>Update Data</button>
<button onClick={()=>setCount(count+1)}>Update Count</button>


    </div>
  )
}

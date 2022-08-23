import React,{useState} from 'react'
import Child1 from './Child1'

export default function Main1() {
    const[data,setData]=useState(0)
    const[count,setCount]=useState(10)
   
  return (
    <div>
        <Child1 data={data} count={count}/>
        <button onClick={()=>setData(data+1)}>Update data</button>
        <button onClick={()=>setCount(count+2)}>Update Count</button>
      
    </div>
  )
}

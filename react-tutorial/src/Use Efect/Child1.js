import React from 'react'
import {useEffect} from 'react'


export default function Child1(props) {
  useEffect(()=>{
    alert("dbs count is :" +props.count)
},[props.count])
useEffect(()=>{
  alert("dbs Data is :" +props.data)
},[props.data])
  return (

    <div>
      <h2>Data is : {props.data}</h2>
      <h2>Count is : {props.count}</h2>
      
    </div>
  )
}

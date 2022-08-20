import React from 'react'
import { useState } from 'react'

export default function UseStateFun() {
    const[data,setData]=useState("Dipak ")
    const[Data1,setData1]=useState("My Details is  ")
    const[data2,setData2]=useState("My Mobile No is  ")
    const[data3,setData3]=useState("I thing my Gf  ")
    const[data4,setdata4]=useState("I thing my futue  ")

function AddMe(){
  setData(data +"Mandal")
}

function Details(){
  setData1(Data1+"Jitu tola, Mahananda tola, ratua, Mlada")
}
function Mobile(){
  setData2(data2+"+919734078407")
}
function Gf(){
  setData3(data3+" Server Error ")
}
function Future(){
  setdata4(data4+"Blind")
}



  return (
    <div style={{backgroundColor:"Skyblue",margin:20}}>
      <h1>{data}</h1>
<button onClick={AddMe}>Add My Title</button>
<h1>{Data1}</h1>
<button onClick={Details}>Add My Details</button>
<h1>{data2}</h1>
<button onClick={Mobile}>Add My Mobile No </button>
<h1>{data3}</h1>
<button onClick={Gf}>Add My Gf Name </button>
<h1>{data4}</h1>
<button onClick={Future}>Add My Future</button>


      
    </div>
  )
}

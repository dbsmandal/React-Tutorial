import React from 'react'
import { useState } from 'react'
import Student from './Student'

export default function FunProps() {
    const[name,setName]=useState("Dipak")
  return (
    <div>
      <Student name ={name} email={"Dipak@gmail.com"} others={{Addres:"Ratua",Mobile:"9999999999"}}/>
      <button onClick={()=>{setName("Dipak Mandal in react Props")}}>Update Data</button>
      <Student name ={"Arun Mandal"} email={"Arun@gmail.com"} others={{Addres:"Malda",Mobile:"88888888888"}}/>
      <Student name ={"Akhay Mandal"} email={"Akhay@gmail.com"} others={{Addres:"Mahananda tola",Mobile:"77777777"}}/>
      <Student name ={"Sorav Mandal"} email={"Sorav@gmail.com"} others={{Addres:"Samsi",Mobile:"66666666"}}/>
      <Student name ={"Abhishek Mandal"} email={"Abhishek@gmail.com"} others={{Addres:"Bihar",Mobile:"5555555"}}/>
      <Student name ={"Bikash Mandal"} email={"Bikash@gmail.com"} others={{Addres:"Delhi",Mobile:"4444444444"}}/>
    </div>
  )
}

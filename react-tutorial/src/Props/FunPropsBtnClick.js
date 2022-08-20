import React from 'react'
import { useState } from 'react'
import StudentBtnClick from './StudentBtnClick'

export default function FunProps() {
    const[data,setData]=useState({name:"Dummy Name",email:"dumy@gamil.com",addres:"dummy",mobile:"xxxxxxxxxx"})
    const[Akhay,setAkhay]=useState({name:"Dummy Name",email:"dumy@gamil.com",addres:"dummy",mobile:"xxxxxxxxxx"})
    const[Abhishek,setAbhishek]=useState({name:"Dummy Name",email:"dumy@gamil.com",addres:"dummy",mobile:"xxxxxxxxxx"})
    const[Sourav,setSourav]=useState({name:"Dummy Name",email:"dumy@gamil.com",addres:"dummy",mobile:"xxxxxxxxxx"})



    function Student1(){
        setData({name:"Dipak Mandal",email:"Dbsmandal@gmail.com",addres:"Ratua,Mahananda Tola",mobile:"9734078407"})
    }
    function Student2(){
        setAkhay({name:"Akhay  Kumar singh",email:"Akhay@gmail.com",addres:"Patna",mobile:"7011681166"})
    }
    function Student3(){
        setAbhishek({name:"Abhishek  Kumar singh",email:"Abhishek@gmail.com",addres:"Patna",mobile:"9775846985"})
    }
    function Student4(){
        setSourav({name:"Sourav pandit",email:"Sourav@gmail.com",addres:"delhi",mobile:"8145669874"})
    }
    
    

  return (
    <div style={{backgroundColor:"cyan",margin:20}}>
      <StudentBtnClick name={data.name} email={data.email} Addres={data.addres} Mobile={data.mobile}/>
      <button onClick={()=>Student1()}>Update Data</button>
      <StudentBtnClick name={Akhay.name} email={Akhay.email} Addres={Akhay.addres} Mobile={Akhay.mobile}/>
      <button onClick={()=>Student2()}>Update Data</button>

      <StudentBtnClick name={Abhishek.name} email={Abhishek.email} Addres={Abhishek.addres} Mobile={Abhishek.mobile}/>
      <button onClick={()=>Student3()}>Update Data</button>

      <StudentBtnClick name={Sourav.name} email={Sourav.email} Addres={Sourav.addres} Mobile={Sourav.mobile}/>
      <button onClick={()=>Student4()}>Update Data</button>

      
    </div>
  )
}

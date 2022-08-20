import React,{useState} from 'react'


export default function StateInFunCompo() {
    const [data, setData] = useState(0)
    function updateData() {
        setData(data + 1)

    }
    return (
        <div  style={{backgroundColor:"lightgreen",margin:20}}>

            <h1>{data}</h1>
            <button onClick={updateData}>Update Data</button>

        </div>
    )
}
//notes:: How to use State
// useState is a one type of hooks ,its allows or maintaines permision in  states
//import usestate from react 
//const [data, setData] = useState(0) 0 is initial value here data is only name you can choose any name
//define a function like update data also update data is only name  where use inside of button onclick function
//after that above in button firstly you can  import data like  h1 tag
//once you define a function after that you can use this function in button  on click event

//Why we are use state?
//Ans==Because we are not able to update data with help of Variables
import React from 'react'
import {useState} from 'react'


export default function StateInFunCompo() {
    const [data, setData] = useState(0)
    function updateData() {
        setData(data + 1)

    }
    console.warn("______");
    return (
        <div>

            <h1>{data}</h1>
            <button onClick={updateData}>Update Data</button>

        </div>
    )
}
//notes:: How to use State
//import usestate from react 
//const [data, setData] = useState(0) 0 is initial value
//define a function like update data
//once you define a function after that you can use this function in button  on click event

//Why we are use state?
//Ans==Because we are not able to update data with help of Variables
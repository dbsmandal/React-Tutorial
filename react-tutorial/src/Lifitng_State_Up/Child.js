import React from 'react'

export default function Child(props) {
    const data={name:"Dipak Mandal pass data child to parent component",email:"dipak@test.com"}

  return (
    <div>
      <h2>Moving Data Child from parent :</h2>
      <button onClick={()=>props.alert(data)}>Pass Data Child to parent</button>
    </div>
  )
}

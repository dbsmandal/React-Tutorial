import React from 'react'

export default function Student(props) {
  return (
    <div style={{backgroundColor:"Skyblue",margin:20}}>
      <h1>Name:{props.name}</h1>
      <h2>Email:{props.email}</h2>
      <h2>Addres:{props.others.Addres}</h2>
      <h2>Mobile:{props.others.Mobile}</h2>
    </div>
  )
}

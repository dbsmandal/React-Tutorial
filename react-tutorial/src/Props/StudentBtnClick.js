import React from 'react'

export default function StudentBtnClick(props) {
  return (
    <div style={{backgroundColor:"Skyblue",margin:20}}>
      <h1>Name:{props.name}</h1>
      <h2>Email:{props.email}</h2>
      <h2>Addres:{props.Addres}</h2>
      <h2>Mobile:{props.Mobile}</h2>
    </div>
  )
}

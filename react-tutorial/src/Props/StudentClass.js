import React from "react";

class StudentClass extends React.Component{
    render(){
        console.log(this.props)
        return(
            <>
            <h1>props with class Component</h1>
            <h2>Name:{this.props.name}</h2>
            <h3>email:{this.props.email}</h3>
            </>


        )
    } 
}
export default StudentClass;
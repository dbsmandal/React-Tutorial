import React from "react";
// import {UseState} from "react";
import StudentClass from "./StudentClass";



class ClassProps extends React.Component{
    constructor()
    {
      super();
      this.state={
        name:"Dipak Mandal",
        email:"Dipak@test.com",
        name2:"Sourav Pandit",
        email2:"Sourav@gmail.com"
      }
    }
  
    render(){
        return(
            <>
   <StudentClass name={this.state.name} email={this.state.email}></StudentClass>
       <button onClick={()=>this.setState({name:"Dbsmandal",email:"dbsmandal@gmail.com"})} >Update Name & Email</button>
       <StudentClass name={this.state.name2} email={this.state.email2}></StudentClass>
       <button onClick={()=>this.setState({name2:"Sorav pandit as a dancer",email2:"SoravDancer@gmail.com"})} >Update Name & Email</button>

            </>
        )
    }
}
export default ClassProps;
import React, { Component } from 'react'
class  UseStateClass extends Component {    
    constructor()
    {
        super();
        this.state={
            data1:"Try to use React State in Class Component with update type is Jsx Element like Content",
            data2:"Try to use React State in Class Component with update type is  Contineusly update",
            data3:0,
            data4:"Try to use React State in Class Component with update type is  number Decrease",
            data5:0,

        }
    }
    
    JsxElement(){
        this.setState({data1:"Update this data with help of state in class component"})
    }
    Contineusly(){
        this.setState({data1:this.state.data1+"Update Contineusly"})
    }
    decraseNumber(){
        this.setState({data3:this.state.data3-1})
    }
    increaseNumber(){
        this.setState({data3:this.state.data3+1})
    }
    render(){
        return (
            <div>
            
              <h1>{this.state.data1}</h1>
              <button onClick={()=>this.JsxElement()}> Update Data</button>
              <button onClick={()=>this.Contineusly()}> Update Data jsx type Contineusly</button>

                <h1>{this.state.data2}</h1>
                <h2>{this.state.data3}</h2>
                <button onClick={()=>this.decraseNumber()}>Decrease Number</button>
                <button onClick={()=>this.increaseNumber()}>Incrase Number</button>

            </div>
          )   
    }

}
export default UseStateClass;
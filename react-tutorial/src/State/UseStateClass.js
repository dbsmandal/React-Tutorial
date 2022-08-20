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
            
              <h1> this is h1 tag and here import data1 is ---{this.state.data1}</h1>
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


//When ever use State in class Component Follow some Steps like Below
//1. create class component like that 
// import React, { Component } from 'react'
// class  UseStateClass extends Component {    
    
//     render(){
//         return (
//             <div>
            
    
//             </div>
//           )   
//     }

// }
// export default UseStateClass;

//2. Define a constructor 
//3.Add data as you want like that 

// constructor()
// {
//     super();
//     this.state={
//         data1:"Try to use React State in Class Component with update type is Jsx Element like Content",
//         data2:"Try to use React State in Class Component with update type is  Contineusly update",
//         data3:0,
//         data4:"Try to use React State in Class Component with update type is  number Decrease",
        

//     }
// }

//4.Whenever try to update state then require a button  and define that data wich you ant update help of state thats why create a button add a arrow function inside  button tag like that (line a.line b)

{/*line a. <h1> this is h1 tag and here import data1 is ---{this.state.data1}</h1> */}
{/* line b. <button onClick={()=>this.JsxElement()}> Update Data</button> */}


//5.Define that function wich are allready declare in your button like that (JsxElement)
// JsxElement(){
//     this.setState({data1:"Update this data with help of state in class component"})
// }
//note that : If you udate one time then you can use above syntax but if you want try to update continuesly then use this type of syntax in function 
// Contineusly(){
//     this.setState({data1:this.state.data1+"Update Contineusly"})
// }
//And if you want update contineusly (Incrase or Decrase  button type)  then you can use this type of synatax

// decraseNumber(){
//     this.setState({data3:this.state.data3-1})
// }
// increaseNumber(){
//     this.setState({data3:this.state.data3+1})
// }
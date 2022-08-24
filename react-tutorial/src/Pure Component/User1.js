import React from 'react'

class User1 extends React.PureComponent {
    constructor()
    {
        super()
        this.state={
          
          count:0
              
            
        }
    }
//  updatename(){
// this.setState(this.state.name="dbsmandal")
// }
// updatecount(){
//   this.setState(this.state.count+1)
// }
  render(){
    console.warn("click-rerendering")
    
    return (
        <div>
            <h1> use pure Component: It is not able to use Functional Component</h1>
                        <h2>Count is :{this.state.count}</h2>
            <button onClick={()=>this.setState({count:1})}>Update Count</button>
          
        </div>
      )
  }
}

export default User1
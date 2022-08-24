import React from 'react'
import User from './User'

export default function ReactFragment() {
  return (
    <div>
        <h1>React Fragment</h1>
        <table>
            <tbody>
                <tr>
                    <User/>
                </tr>
            </tbody>
        </table>
      
    </div>
  )
}
//when you div under the table then console will be display some error , bassically console that you note use div
//if you resolve the isue then you can react fragment 
//react fragment we are use three ways
//1.you can you <></>
//2.import Fragemnt in react like import react,{fragment} from "react" and use it under the function like {<Fragment>........</Fragment>}
//3. you can also use with out importing like that {<react.Fragment>........</React.Fragment>}
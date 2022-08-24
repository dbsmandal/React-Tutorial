import React from 'react'
import Child from './Child'

export default function Parent(data) {
    function childtoParent(){
        console.log(data)
        alert(data)
    }
  return (
    <div>
        <h1>Lifting State Up </h1>
        <Child alert={childtoParent}/>
        <h3>data coming from child to parent :</h3>
      
    </div>
  )
}

//1.how to pass data parent to child
//step 1
//parent.js file code below==
// import React from 'react'
// import Child from './Child'

// export default function Parent() {
//     const name="Dipak Mandal pass data parent to child component"
//   return (
//     <div>
//         <h1>Lifting State Up </h1>
//         <Child username={name}/>
      
//     </div>
//   )
// }
//step 2
//child.js file code below==
// import React from 'react'

// export default function Child(props) {
//   return (
//     <div>
//       <h2>Data Coming from parent :{props.username}</h2>`
//     </div>
//   )
// }


//now lets write code for pass data child from parent in main code {also its called Lifting state up}

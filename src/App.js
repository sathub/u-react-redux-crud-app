import React, { Component } from 'react';


// class App extends Component {
//   render(){
//     return(
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => { console.log("Iam clicked!") }} />
//     </React.Fragment>
//    )
//  }
// }
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}
const Cat = () => {
  return <div>meo</div>
}


export default App;

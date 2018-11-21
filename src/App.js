import React, { Component } from 'react';


const App = () => {
  const profiles = [
    { name: "tarou", age: 20 },
    { name: "hanako", age: 10 },
    { name: "Noname" }

  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }
    </div>
  )
}
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years oll !</div>
}

User.defaultProps = {
  age: 3
}

export default App;

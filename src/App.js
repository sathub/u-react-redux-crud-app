import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "taro", age: 39 },
    { name: "hanako", age: 29 },
    { name: "motoko", age: 19 },
    { name: "taka", age: 9 },
    { name: "nama", age: 8}

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
  return <div>Hi I am {props.name} 年齢は{props.age}です</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired

}

export default App;

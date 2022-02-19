import React from "react";
import './Person.css'

const Person = ({ name, age }) => {
  return (
    <p className='Person'>
      Name : {name} , Age : {age}
    </p>
  );
};

export default Person;

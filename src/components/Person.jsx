import React from "react";
import './Person.css'

const Person = ({ firstName, lastName }) => {
  return (
    <p className='Person'>
      First Name : {firstName} , Last Name : {lastName}
    </p>
  );
};

export default Person;

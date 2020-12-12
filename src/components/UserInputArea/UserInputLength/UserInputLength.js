import React, { useContext } from 'react';
import Context from '../../../context/context';

const UserInputLength = () => {
  const context = (useContext(Context));
  return (
  <h3>
    Text's length is {context.userInput.length}
  </h3> 
  );
};

export default UserInputLength;
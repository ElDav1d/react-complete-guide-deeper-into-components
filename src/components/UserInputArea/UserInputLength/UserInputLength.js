import React, { useContext } from 'react';
import PseudoStoreContext from '../../../context/pseudo-store-context';

const UserInputLength = () => {
  const pseudoStoreContext = (useContext(PseudoStoreContext));
  return (
  <h3>
    Text's length is {pseudoStoreContext.userInput.length}
  </h3> 
  );
};

export default UserInputLength;
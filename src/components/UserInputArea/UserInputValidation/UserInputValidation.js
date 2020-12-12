import React, { useContext } from 'react';
import PseudoStoreContext from '../../../context/pseudo-store-context';

const validation = () => {
  const pseudoStoreContext = (useContext(PseudoStoreContext));
  return (
    <h2>{pseudoStoreContext.userInput.length < 5 ? 'Text too short' : 'Text long enough'}</h2>
  )
};

export default validation;
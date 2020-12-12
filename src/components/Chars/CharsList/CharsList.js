import React, { useContext } from 'react';
import PseudoStoreContext from '../../../context/pseudo-store-context';
import Char from './Char/Char';

const charList = () => {
  const pseudoStoreContext = (useContext(PseudoStoreContext));
  return (
    <ul>
      {pseudoStoreContext.userInput.split('').map((char, index) => {
        return (
          <Char
            char={char}
            key={index}
          />
        )
      })}
    </ul>
  );
};

export default charList;
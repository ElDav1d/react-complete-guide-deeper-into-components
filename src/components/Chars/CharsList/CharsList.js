import React, { useContext } from 'react';
import Context from '../../../context/context';
import Char from './Char/Char';

const charList = () => {
  const context = (useContext(Context));
  return (
    <ul>
      {context.userInput.split('').map((char, index) => {
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
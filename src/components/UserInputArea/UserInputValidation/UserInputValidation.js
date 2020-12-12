import React, { useContext } from 'react';
import Context from '../../../context/context';

const validation = () => {
  const context = (useContext(Context));
  const validationText = context.userInput.length < 5 ? 'Text too short' : 'Text long enough';
  return (
    <h2>
      {validationText}
    </h2>
  )
};

export default validation;
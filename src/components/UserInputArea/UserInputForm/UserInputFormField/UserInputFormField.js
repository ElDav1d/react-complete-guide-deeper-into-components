import React, { useEffect, useContext, useRef } from 'react';
import Context from '../../../../context/context';

const userInputFormField = () => {
  const inputFocusRef = useRef(null);
  const context = (useContext(Context));
   
  useEffect(() => {
    inputFocusRef.current.focus();
  },[])

  return (
    <input
      type="text"
      ref={inputFocusRef}
      onChange={context.inputChange}
      value={context.userInput}
    />
  )
};

export default userInputFormField;
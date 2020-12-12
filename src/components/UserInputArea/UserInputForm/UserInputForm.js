import React, { useEffect, useContext, useRef } from 'react';
import { StyledLabel } from '../../../styles/styles';
import Context from '../../../context/context';
 
const userInputForm = () => {
  const inputFocusRef = useRef(null);
  const context = (useContext(Context));

  useEffect(() => {
    inputFocusRef.current.focus();
  },[])

  return (
    <form>
      <StyledLabel>
        Write some text bellow
      </StyledLabel>
      <input
        type="text"
        ref={inputFocusRef}
        onChange={context.inputChange}
        value={context.userInput}
      />
    </form>
  );
}

export default userInputForm;
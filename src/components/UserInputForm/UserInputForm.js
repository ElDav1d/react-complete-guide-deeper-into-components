import React, { useEffect, useContext, useRef } from 'react';
import { StyledLabel } from '../../styles/styles';
import PseudoStoreContext from '../../context/pseudo-store-context'
 
const userInputForm = () => {
  const inputFocusRef = useRef(null);
  const pseudoStoreContext = (useContext(PseudoStoreContext));

  console.log('Form Render');
  useEffect(() => {
    console.log('UseEffect at Form')
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
        onChange={pseudoStoreContext.inputChange}
        value={pseudoStoreContext.userInput}
      />
    </form>
  );
}

export default userInputForm;
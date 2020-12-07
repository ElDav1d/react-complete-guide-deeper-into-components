import React, { useContext } from 'react';
import { StyledLi } from '../../../styles/styles';
import PseudoStoreContext from '../../../context/pseudo-store-context';

const char = (props) => {
  const pseudoStoreContext = (useContext(PseudoStoreContext));
  return (
    <StyledLi
      onClick={pseudoStoreContext.deleteChar}
    >
      {props.char}
    </StyledLi>
  )
};

export default char;
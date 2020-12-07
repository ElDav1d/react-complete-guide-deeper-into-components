import React, { useContext } from 'react';
import { StyledLi } from '../../../styles/styles';
import PseudoStoreContext from '../../../context/pseudo-store-context';

const string = props => {
  const pseudoStoreContext = (useContext(PseudoStoreContext));
  return (
    <StyledLi
      onClick={pseudoStoreContext.deleteString}
    >
      {props.string}
    </StyledLi>
  )
};

export default string;
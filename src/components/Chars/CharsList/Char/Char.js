import React, { useContext } from 'react';
import { StyledLi } from '../../../../styles/styles';
import Context from '../../../../context/context';

const char = props => {
  const context = (useContext(Context));
  return (
    <StyledLi
      onClick={context.deleteChar}
    >
      {props.char}
    </StyledLi>
  )
};

export default char;
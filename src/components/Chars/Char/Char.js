import React from 'react';
import { StyledLi } from '../../../styles/styles';

const char = (props) => {
  return (
    <StyledLi
      onClick={props.click}>
        {props.char}
    </StyledLi>
  )
};

export default char;
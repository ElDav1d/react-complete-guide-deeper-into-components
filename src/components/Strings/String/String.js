import React from 'react';
import { StyledLi } from '../../../styles/styles';

const string = (props) => {  
  return (
    <StyledLi>
      {props.string}
    </StyledLi>
  )
};

export default string;
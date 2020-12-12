import React, { useContext } from 'react';
import { StyledLi } from '../../../../styles/styles';
import Context from '../../../../context/context';

const string = props => {
  const context = (useContext(Context));
  return (
    <StyledLi
      onClick={context.deleteString}
    >
      {props.string}
    </StyledLi>
  )
};

export default string;
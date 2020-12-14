import React from 'react';
import { StyledButton } from '../../../styles/styles';

const showStringsButton = props => {
  let buttonText = 'Show';
  if (props.showStrings) {buttonText = 'Hide'};

  console.log('[STRINGTOGGLE] render');
  return (
    <StyledButton
      onClick={props.toggleList}
      backgroundColor={props.showStrings}
    >
      {buttonText}
    </StyledButton>
  )
}

export default React.memo(showStringsButton);
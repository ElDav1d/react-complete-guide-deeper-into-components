import React, { useContext } from 'react';
import Context from '../../../context/context';
import { StyledButton } from '../../../styles/styles';

const showStringsButton = () => {
  const context = (useContext(Context));
  const showStrings = context.showStrings;

  let buttonText = 'Show';
  if (showStrings) {buttonText = 'Hide'};

  return (
    <StyledButton
      onClick={context.showSavedStrings}
      backgroundColor={showStrings}
      >
        {buttonText}
    </StyledButton>
  )
}

export default showStringsButton;
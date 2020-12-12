import React, { useContext } from 'react';
import PseudoStoreContext from '../../../context/pseudo-store-context';
import { StyledButton } from '../../../styles/styles';

const showStringsButton = () => {
  const pseudoStoreContext = (useContext(PseudoStoreContext));
  const showStrings = pseudoStoreContext.showStrings;

  let buttonText = 'Show';
  if (showStrings) {buttonText = 'Hide'};

  return (
    <StyledButton
      onClick={pseudoStoreContext.showSavedStrings}
      backgroundColor={showStrings}
      >
        {buttonText}
    </StyledButton>
  )
}

export default showStringsButton;
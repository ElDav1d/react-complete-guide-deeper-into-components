import React, {useContext} from 'react';
import PseudoStoreContext from '../../../context/pseudo-store-context';
import { StyledButton, StyledControlsContainer } from '../../../styles/styles';

const charControls = props => {
  const pseudoStoreContext = (useContext(PseudoStoreContext));
  const save = false;
  const clear = true;

  return (
    <StyledControlsContainer>
      <StyledButton
        onClick={pseudoStoreContext.saveInput}
        backgroundColor={save}
        >
          SAVE ITEM
      </StyledButton>
      <StyledButton
        onClick={pseudoStoreContext.clearInput}
        backgroundColor={clear}
        >
          CLEAR LIST
      </StyledButton>
    </StyledControlsContainer>
  )
}

export default charControls;
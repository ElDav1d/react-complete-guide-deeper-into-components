import React, {useContext} from 'react';
import Context from '../../../context/context';
import { StyledButton, StyledControlsContainer } from '../../../styles/styles';

const charControls = () => {
  const context = (useContext(Context));
  const save = false;
  const clear = true;

  return (
    <StyledControlsContainer>
      <StyledButton
        onClick={context.saveInput}
        backgroundColor={save}
        >
          SAVE ITEM
      </StyledButton>
      <StyledButton
        onClick={context.clearInput}
        backgroundColor={clear}
        >
          CLEAR LIST
      </StyledButton>
    </StyledControlsContainer>
  )
}

export default charControls;
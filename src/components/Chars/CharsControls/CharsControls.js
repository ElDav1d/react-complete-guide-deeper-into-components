import React from 'react';
import { StyledButton, StyledControlsContainer } from '../../../styles/styles';

const charControls = props => {
  const save = false;
  const clear = true;
  console.log('CONTROLS render');
  return (
    <StyledControlsContainer>
      <StyledButton
        onClick={props.save}
        backgroundColor={save}
        >
          SAVE ITEM
      </StyledButton>
      <StyledButton
        onClick={props.clear}
        backgroundColor={clear}
        >
          CLEAR LIST
      </StyledButton>
    </StyledControlsContainer>
  )
}

export default React.memo(charControls);
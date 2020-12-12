import React from 'react';
import { StyledLabel } from '../../../styles/styles';
import UserInputFormField from './UserInputFormField/UserInputFormField';

const userInputForm = () => (
  <form>
    <StyledLabel>
      Write some text bellow
    </StyledLabel>
    <UserInputFormField />
  </form>
)

export default userInputForm;
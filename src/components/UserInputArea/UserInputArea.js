import React from 'react';
import UserInputForm from './UserInputForm/UserInputForm';
import UserInputLength from './UserInputLength/UserInputLength';
import UserInputValidation from './UserInputValidation/UserInputValidation';
import withMaterialSection from '../../hoc/withMaterialSection';
import classes from '../../containers/App.css';

const userInputArea = () => (
  <React.Fragment>
    <UserInputForm />
    <UserInputLength />
    <UserInputValidation />
  </React.Fragment>
);


export default withMaterialSection(userInputArea, classes.AppMaterialCard);
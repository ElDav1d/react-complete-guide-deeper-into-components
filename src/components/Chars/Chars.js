import React from 'react';
import CharsList from './CharsList/CharsList';
import CharsControls from './CharsControls/CharsControls';
import withMaterialSection from '../../hoc/withMaterialSection';
import classes from '../../containers/App.css';

const chars = () => {
  return (
    <React.Fragment>
      <h2>Your input</h2>
      <CharsList />
      <CharsControls />
    </React.Fragment> 
  )
}

export default React.memo(withMaterialSection(chars, classes.AppMaterialCard));
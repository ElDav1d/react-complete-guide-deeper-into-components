import React from 'react';
import CharsList from './CharsList/CharsList';
import withMaterialSection from '../../hoc/withMaterialSection';
import classes from '../../containers/App.css';

const chars = props => {
  return (
    <React.Fragment>
      <h2>Your input</h2>
      <CharsList />
      {props.controls}
    </React.Fragment> 
  )
}

export default React.memo(withMaterialSection(chars, classes.AppMaterialCard));
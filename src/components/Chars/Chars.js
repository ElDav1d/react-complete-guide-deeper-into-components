import React, { PureComponent } from 'react';
import CharsList from './CharsList/CharsList';
import CharsControls from './CharsControls/CharsControls';
import withMaterialSection from '../../hoc/withMaterialSection';
import classes from '../../containers/App.css';

class Chars extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h2>Your input</h2>
        <CharsList />
        <CharsControls />
      </React.Fragment> 
    )
  }
}

export default withMaterialSection(Chars, classes.AppMaterialCard);
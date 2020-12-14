import React, { Component } from 'react';
import CharsList from './CharsList/CharsList';
import withMaterialSection from '../../hoc/withMaterialSection';
import classes from '../../containers/App.css';

class Chars extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render () {
    return (
      <React.Fragment>
        <h2>Your input</h2>
        <CharsList />
        {this.props.controls}
      </React.Fragment> 
    )
  }
}

export default withMaterialSection(Chars, classes.AppMaterialCard);
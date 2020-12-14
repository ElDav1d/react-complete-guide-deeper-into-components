import React, { Component } from 'react';
import StringsList from './StringsList/StringsList';
import withMaterialSection from '../../hoc/withMaterialSection';
import classes from '../../containers/App.css';

class Strings extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    console.log('[STRINGS] render');
    return (
      <React.Fragment>
        <h2>Your saved strings</h2>
        {this.props.show ? <StringsList show={this.props.show}/> : null}
        {this.props.toggle}
      </React.Fragment>
    )
  }
}

export default withMaterialSection(Strings, classes.AppMaterialCard);
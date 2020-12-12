import React, { PureComponent } from 'react';
import StringsList from './StringsList/StringsList';
import StringsListToggle from './StringsListToggle/StringsListToggle';
import withMaterialSection from '../../hoc/withMaterialSection';
import classes from '../../containers/App.css';
import Context from '../../context/context';

class Strings extends PureComponent {
  static contextType = Context;

  render() {
    return (
      <React.Fragment>
        <h2>Your saved strings</h2>
        {this.context.showStrings ? <StringsList /> : null}
        <StringsListToggle />
      </React.Fragment>
    )
  }
}

export default withMaterialSection(Strings, classes.AppMaterialCard);
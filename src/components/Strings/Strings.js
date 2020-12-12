import React, { PureComponent } from 'react';
import ShowStringsButton from './ShowStringsButton/ShowStringsButton';
import String from  './String/String';
import withMaterialSection from '../../hoc/withMaterialSection';
import classes from '../../containers/App.css';
import PseudoStoreContext from '../../context/pseudo-store-context';

class Strings extends PureComponent {
  static contextType = PseudoStoreContext;

  render() {
    let stringsList = null;
    if (this.context.showStrings) {
      stringsList =
        this.context.savedStrings.map((string, index) => {
          return (
            <String
              string={string}
              key={index}
            />
          )
        })
    }

    return (
      <React.Fragment>
        <h2>Your saved strings</h2>
        {stringsList}
        <ShowStringsButton />
      </React.Fragment>
    )
  }
}

export default withMaterialSection(Strings, classes.AppMaterialCard);
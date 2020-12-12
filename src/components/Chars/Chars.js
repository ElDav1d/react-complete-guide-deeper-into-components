import React, { PureComponent } from 'react';
import Char from './Char/Char';
import CharsControls from './CharsControls/CharsControls';
import withMaterialSection from '../../hoc/withMaterialSection';
import classes from '../../containers/App.css';
import PseudoStoreContext from '../../context/pseudo-store-context';

class Chars extends PureComponent {
  static contextType = PseudoStoreContext;

  render() {
    return (
      <React.Fragment>
        <h2>Your input</h2>
        {
          this.context.userInput.split('').map((char, index) => {
            return (
              <Char
                char={char}
                click={() => this.context.deleteChar(index)}
                key={index}
              />
            )
          })
        }
        <CharsControls />
      </React.Fragment>
    )
  }
}

export default withMaterialSection(Chars, classes.AppMaterialCard);
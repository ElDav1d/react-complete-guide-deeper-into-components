import React, { PureComponent } from 'react';
import Char from './Char/Char';
import CharsControls from './CharsControls/CharsControls';
import withMaterialUl from '../../hoc/withMaterialUl';
import classes from '../../containers/App.css';

class Chars extends PureComponent {
  render() {
    return (
      <React.Fragment>
        {
          this.props.chars.split('').map((char, index) => {
            return (
            <Char
              char={char}
              click={() => this.clicked(index)}
              key={index} />
              )
          })
        }
        <CharsControls />
      </React.Fragment>
    )
  }
}

export default withMaterialUl(Chars, classes.AppMaterialUl);
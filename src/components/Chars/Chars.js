import React, { PureComponent } from 'react';
import Char from './Char/Char';
import withMaterialUl from '../../hoc/withMaterialUl';
import classes from '../../containers/App.css';

class Chars extends PureComponent {
  render() {
    return (
      this.props.chars.split('').map((char, index) => {
        return <Char
          char={char}
          click={() => this.clicked(index)}
          key={index} />
      })
    )
  }
}

export default withMaterialUl(Chars, classes.AppMaterialUl);
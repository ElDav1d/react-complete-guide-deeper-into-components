import React, { PureComponent } from 'react';
import Char from './Char/Char';

class Persons extends PureComponent {
  render() {
    return (
      <ul>
        {this.props.chars.split('').map((char, index) => {
          return <Char
            char={char}
            click={() => this.clicked(index)}
            key={index} />
        })}
      </ul>
    )
  }
}

export default Persons;
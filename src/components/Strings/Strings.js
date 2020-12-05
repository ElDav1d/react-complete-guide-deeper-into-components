import React, { Component } from 'react';
import String from  './String/String';
import withMaterialUl from '../../hoc/withMaterialUl';
import classes from '../../containers/App.css';

class Strings extends Component {
  render() {
    return (
      this.props.strings.map((string, index) => {
        return (
          <String
            string={string}
            key={index}
          />
        )
      })
    )
  }
}

export default withMaterialUl(Strings, classes.AppMaterialUl);
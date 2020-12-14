// import React, { useContext } from 'react';
import React, { Component } from 'react';
import Context from '../../../context/context';
import String from './String/String';

class StringsList extends Component {
  static contextType = Context;

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.show === this.props.show) {
      return false;
    } else {
      return true
    }
  }

  render () {
    console.log('[STRINGSLIST] render')
    return (
      <ul>
        {
          this.context.savedStrings.map((string, index) => {
            return (
              <String
                string={string}
                key={index}
              />
            )
          })
        }
      </ul>
    );
  }
};

export default StringsList;
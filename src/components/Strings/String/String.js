import React from 'react';

const string = (props) => {
  const style = {
    display: 'inline-block',
    padding: '1rem',
    textAlign: 'center',
    margin: '1rem',
    border: '1px solid black'
  }
  
  return (
    <li
      style={style}>{props.string}
    </li>
  )
};

export default string;
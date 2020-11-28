import React from 'react';


const char = (props) => {
  const style = {
    display: 'inline-block',
    padding: '1rem',
    textAlign: 'center',
    margin: '1rem',
    border: '1px solid black'
  }
  
  return (
    <li
      onClick={props.click}
      style={style}>{props.char}</li>
  )
};

export default char;
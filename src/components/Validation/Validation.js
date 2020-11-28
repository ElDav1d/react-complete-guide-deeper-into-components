import React from 'react';

const validation = (props) => {
  return (
  <h2>{props.textLength < 5 ? 'Text too short' : 'Text long enough'}</h2>
  )
};

export default validation;
import React from 'react';

const withMaterialUl = (WrappedComponent, className) => {
  return props => (
    <ul className={className}>
      <WrappedComponent {...props}/>
    </ul>
  )
}

export default withMaterialUl;
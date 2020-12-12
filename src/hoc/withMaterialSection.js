import React from 'react';

const withMaterialSection = (WrappedComponent, className) => {
  return props => (
    <section className={className}>
      <WrappedComponent {...props}/>
    </section>
  )
}

export default withMaterialSection;
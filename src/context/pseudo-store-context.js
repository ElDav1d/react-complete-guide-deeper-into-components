import React from 'react';

const pseudoStoreContext = React.createContext({
  inputString: '',
  savedStrings: [],
  showStrings: false,
  clear: () => {},
  save: () => {},
  show: () => {}
})

export default pseudoStoreContext;
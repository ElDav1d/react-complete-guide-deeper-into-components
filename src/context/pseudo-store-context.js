import React from 'react';

const pseudoStoreContext = React.createContext({
  inputString: '',
  savedStrings: [],
  clear: () => {},
  save: () => {},
})

export default pseudoStoreContext;
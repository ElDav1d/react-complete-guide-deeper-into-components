import React from 'react';

const pseudoStoreContext = React.createContext({
  inputString: '',
  savedStrings: [],
  showStrings: false,
  clearInput: () => {},
  saveInput: () => {},
  showSavedStrings: () => {},
  deleteChar: () => {},
  deleteString: () => {},
})

export default pseudoStoreContext;
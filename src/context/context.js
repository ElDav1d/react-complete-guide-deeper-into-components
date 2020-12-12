import React from 'react';

const pseudoStoreContext = React.createContext({
  userInput: '',
  savedStrings: [],
  showStrings: false,
  inputChange: () => {},
  clearInput: () => {},
  saveInput: () => {},
  showSavedStrings: () => {},
  deleteChar: () => {},
  deleteString: () => {},
})

export default pseudoStoreContext;
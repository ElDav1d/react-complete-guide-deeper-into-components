import React from 'react';

const Context = React.createContext({
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

export default Context;
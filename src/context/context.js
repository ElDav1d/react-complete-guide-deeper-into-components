import React from 'react';

const Context = React.createContext({
  userInput: '',
  savedStrings: [],
  showStrings: false,
  inputChange: () => {},
  showSavedStrings: () => {},
  deleteChar: () => {},
  deleteString: () => {},
})

export default Context;
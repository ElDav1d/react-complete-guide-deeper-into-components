import React, { Component } from 'react';
import classes from './App.css';
import UserInputForm from '../components/UserInputForm/UserInputForm';
import Validation from '../components/Validation/Validation';
import Chars from '../components/Chars/Chars';
import Strings from '../components/Strings/Strings';
import PseudoStoreContext from '../context/pseudo-store-context';

class App extends Component {
  state = {
    userInput: '',
    savedStrings: [],
    showStrings: false
  }

  inputChangeHandler = (event) => {
    const newInput= event.target.value;
    this.setState({userInput: newInput});
  }

  deleteCharHandler = (charIndex) => {
    const newTextArray = this.state.userInput.split('');
    newTextArray.splice(charIndex, 1);
    this.setState({userInput: newTextArray.join('')})
  }

  deleteStringHandler = (stringIndex) => {
    const newStringsArray = this.state.savedStrings;
    newStringsArray.splice(stringIndex, 1);
    this.setState({savedStrings: newStringsArray})
  }

  clearInputHandler = () => {
    this.setState({userInput:''});
  }

  saveInputHandler = () => {
    const newSavedStrings = this.state.savedStrings;
    newSavedStrings.push(this.state.userInput);
    this.setState({
      userInput: '',
      savedStrings: newSavedStrings
    })
  }

  showSavedStringsHandler = () => {
    const show = !this.state.showStrings;
    this.setState({showStrings: show})
  }

  render() {
    const textLength = this.state.userInput.length;
    const stringsLength = this.state.savedStrings.length;

    return (
      <PseudoStoreContext.Provider
        value={{
          userInput: this.state.userInput,
          savedStrings: this.state.savedStrings,
          showStrings: this.state.showStrings,
          inputChange: this.inputChangeHandler,
          clearInput: this.clearInputHandler,
          saveInput: this.saveInputHandler,
          showSavedStrings: this.showSavedStringsHandler,
          deleteChar: this.deleteCharHandler,
          deleteString: this.deleteStringHandler
        }}
      >
        <div className={classes.App}>
          <h1>LET'S GO</h1>
          <UserInputForm />
          <h3>
            Text's length is {textLength}
          </h3> 
          <Validation 
            textLength={textLength}/>
            {textLength ? <Chars /> : null}
            {stringsLength ? <Strings /> : null}
        </div>
      </PseudoStoreContext.Provider>
    );
  }
}

export default App;
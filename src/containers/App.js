import React, { Component } from 'react';
import classes from './App.css';
import UserInputArea from '../components/UserInputArea/UserInputArea';
import Chars from '../components/Chars/Chars';
import CharsControls from '../components/Chars/CharsControls/CharsControls';
import Strings from '../components/Strings/Strings';
import StringsListToggle from '../components/Strings/StringsListToggle/StringsListToggle';
import Context from '../context/context';

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
    const hasStrings = newStringsArray.length;
    this.setState({
      savedStrings: newStringsArray,
      showStrings: hasStrings
    })
  }

  clearInputHandler = () => {
    this.setState({userInput:''});
  }

  saveInputHandler = () => {
    const newSavedStrings = this.state.savedStrings;
    newSavedStrings.push(this.state.userInput);
    this.setState({
      userInput: '',
      savedStrings: newSavedStrings,
      showStrings: true
    })
  }

  showSavedStringsHandler = () => {
    this.setState((prevState) => {
      return {showStrings: !prevState.showStrings}
    })
  }

  render() {
    const charsControls = (
      <CharsControls
        save={this.saveInputHandler}
        clear={this.clearInputHandler}
      />
    );

    let chars = null;
    const hasChars =  !!this.state.userInput;

    if (hasChars) {
      chars = (
        <Chars
          controls={charsControls}
          show={hasChars}
        />
      )
    }

    const stringsToggle = (
      <StringsListToggle 
        toggleList={this.showSavedStringsHandler}
        showStrings={this.state.showStrings}
      />
    );

    let strings = null;
    
    if (this.state.savedStrings.length > 0) {
      strings = (
        <Strings
          toggle={stringsToggle}
          show={this.state.showStrings}
        />
      )
    }

    return (
      <Context.Provider
        value={{
          userInput: this.state.userInput,
          savedStrings: this.state.savedStrings,
          showStrings: this.state.showStrings,
          inputChange: this.inputChangeHandler,
          showSavedStrings: this.showSavedStringsHandler,
          deleteChar: this.deleteCharHandler,
          deleteString: this.deleteStringHandler
        }}
      >
        <div className={classes.App}>
          <h1>LET'S GO</h1>
          <UserInputArea />
          {chars}
          {strings}
        </div>
      </Context.Provider>
    );
  }
}

export default App;
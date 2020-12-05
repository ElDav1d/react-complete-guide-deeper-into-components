import React, { Component } from 'react';
import classes from './App.css';
import Validation from '../components/Validation/Validation';
import Chars from '../components/Chars/Chars';
import Strings from '../components/Strings/Strings';
import PseudoStoreContext from '../context/pseudo-store-context';

class App extends Component {
  state = {
    inputString: '',
    savedStrings: [],
    showStrings: false
  }
  
  textChangeHandler = (event) => {
    const textNew= event.target.value;
    this.setState({inputString: textNew});
  }

  deleteCharHandler = (charIndex) => {
    const newTextArray = this.state.inputString.split('');
    newTextArray.splice(charIndex, 1);
    this.setState({inputString: newTextArray.join('')})
  }

  clearHandler = () => {
    this.setState({inputString:''});
  }

  saveHandler = () => {
    const newSavedStrings = this.state.savedStrings;
    newSavedStrings.push(this.state.inputString);
    this.setState({
      inputString: '',
      savedStrings: newSavedStrings
    })
  }

  showStringsHandler = () => {
    const show = !this.state.showStrings;
    this.setState({
      showStrings: show
    })
  }

  render() {
    let charList = null;
    let stringList = null;

    if (this.state.inputString.length) { 
      charList =
        <Chars 
          chars={this.state.inputString}
          clicked={this.deleteCharHandler}
        />
    }

    if (this.state.savedStrings.length) {
      stringList =
        <Strings/>
    }

    const textLength = this.state.inputString.length;
    return (
      <div className={classes.App}>
        <h1>LET'S GO</h1>
        <form>
          <label className={classes.AppInput}>Write some text bellow</label>
          <input
            onChange={this.textChangeHandler}
            type="text"
            value={this.state.inputString}/>
        </form>
        <h3>
          Text's length is {textLength}
        </h3> 
        <Validation 
          textLength={textLength}/>
        <PseudoStoreContext.Provider
          value={{
            inputString: this.state.inputString,
            savedStrings: this.state.savedStrings,
            showStrings: this.state.showStrings,
            clear: this.clearHandler,
            save: this.saveHandler,
            show: this.showStringsHandler
          }}
        >
          {charList}
          {stringList}
        </PseudoStoreContext.Provider>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import classes from './App.css';
import Validation from '../components/Validation/Validation'
import Chars from '../components/Chars/Chars'
import PseudoStoreContext from '../context/pseudo-store-context';

class App extends Component {
  state = {
    inputString: '',
    savedStrings: []
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
    console.log(this.state.savedStrings)
  }

  render() {
    let list = null;

    if (this.state.inputString.length) { 
      list =
      <PseudoStoreContext.Provider
        value={{
          inputString: this.state.inputString,
          savedStrings: this.state.savedStrings,
          clear: this.clearHandler,
          save: this.saveHandler
        }}
      >
        <Chars 
          chars={this.state.inputString}
          clicked={this.deleteCharHandler}
        />
      </PseudoStoreContext.Provider>
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
        {list}
      </div>
    );
  }
}

export default App;

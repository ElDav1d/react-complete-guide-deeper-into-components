import React, { Component } from 'react';
import classes from './App.css';
import Validation from '../components/Validation/Validation';
import Chars from '../components/Chars/Chars';
import Strings from '../components/Strings/Strings';
import PseudoStoreContext from '../context/pseudo-store-context';

class App extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  state = {
    inputString: '',
    savedStrings: [],
    showStrings: false
  }
  
  componentDidMount() {
    this.inputElementRef.current.focus();
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

  deleteStringHandler = (stringIndex) => {
    const newStringsArray = this.state.savedStrings;
    newStringsArray.splice(stringIndex, 1);
    this.setState({savedStrings: newStringsArray})
  }

  clearInputHandler = () => {
    this.setState({inputString:''});
  }

  saveInputHandler = () => {
    const newSavedStrings = this.state.savedStrings;
    newSavedStrings.push(this.state.inputString);
    this.setState({
      inputString: '',
      savedStrings: newSavedStrings
    })
  }

  showSavedStringsHandler = () => {
    const show = !this.state.showStrings;
    this.setState({showStrings: show})
  }

  render() {
    const textLength = this.state.inputString.length;
    const stringsLength = this.state.savedStrings.length;

    return (
      <div className={classes.App}>
        <h1>LET'S GO</h1>
        <form>
          <label className={classes.AppInput}>Write some text bellow</label>
          <input
            ref={this.inputElementRef}
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
            clearInput: this.clearInputHandler,
            saveInput: this.saveInputHandler,
            showSavedStrings: this.showSavedStringsHandler,
            deleteChar: this.deleteCharHandler,
            deleteString: this.deleteStringHandler
          }}
        >
        {textLength ? <Chars /> : null}
        {stringsLength ? <Strings /> : null}
        </PseudoStoreContext.Provider>
      </div>
    );
  }
}

export default App;
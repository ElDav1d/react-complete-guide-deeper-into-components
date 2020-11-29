import React, { Component } from 'react';
import classes from './App.css';
import Validation from '../components/Validation/Validation'
import Chars from '../components/Chars/Chars'

class App extends Component {
  state = {
    inputString: ''
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
  
  render() {
    let list = null;

    if (this.state.inputString.length) { 
      list =
        <Chars 
          chars={this.state.inputString}
          clicked={this.deleteCharHandler}
        />
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

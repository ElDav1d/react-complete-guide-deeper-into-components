import React, { Component } from 'react';
import './App.css';
import Validation from '../components/Validation/Validation'
import Char from '../components/Char/Char'

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

    const listContent = (
      <ul>
        {this.state.inputString.split('').map((item, index) => {
          return <Char
            char={item}
            click={() => this.deleteCharHandler(index)}
            key={index} />
        })}
      </ul>
    )

    if (this.state.inputString.length) { list = listContent }

    const textLength = this.state.inputString.length;
    return (
      <div className="App">
        <h1>LET'S GO</h1>
        <form>
          <label className="App-input">Write some text bellow</label>
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

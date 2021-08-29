import React from 'react';
import './style.css';
import Button from './button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: '' };
  }
  handleClick = e => {
    this.setState({ result: this.state.result + e.target.value });
  };
  clear = () => {
    this.setState({
      result: ''
    });
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, this.state.result.length - 1)
    });
  };
  EqualsTo = () => {
    this.setState({
      result: eval(this.state.result)
    });
  };
  render() {
    return (
      <div className="keypad">
        <input id="resultbar" type="text" value={this.state.result} />
        <div className="calc">
          <button id="clearbutton" onClick={this.clear}>
            Clear
          </button>

          <button onClick={this.backspace}>Del</button>
          <button onClick={this.handleClick} value="/">
            /
          </button>

          <button onClick={this.handleClick} value="7">
            7
          </button>
          <button onClick={this.handleClick} value="8">
            8
          </button>
          <button onClick={this.handleClick} value="9">
            9
          </button>
          <button onClick={this.handleClick} value="+">
            +
          </button>

          <button onClick={this.handleClick} value="4">
            4
          </button>
          <button onClick={this.handleClick} value="5">
            5
          </button>
          <button onClick={this.handleClick} value="6">
            6
          </button>
          <button onClick={this.handleClick} value="*">
            X
          </button>

          <button onClick={this.handleClick} value="1">
            1
          </button>
          <button onClick={this.handleClick} value="2">
            2
          </button>
          <button onClick={this.handleClick} value="1">
            3
          </button>
          <button onClick={this.handleClick} value="-">
            -
          </button>

          <button onClick={this.handleClick} value="0">
            0
          </button>
          <button onClick={this.handleClick} value=".">
            .
          </button>
          <button id="equalbutton" onClick={this.EqualsTo} value="=">
            =
          </button>
        </div>
      </div>
    );
  }
}
export default App;

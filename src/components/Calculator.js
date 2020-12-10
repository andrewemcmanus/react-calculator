import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0,
    }
  }

  setNum = (e, num) => {
    this.setState({ [num]: e.target.value});
  }

  submitNum = () => {
    const newSum = parseInt(this.state.num1) + parseInt(this.state.num2);
    // why did this require parseInt?
    this.setState({ sum: newSum });
  }
// separate functions for subtract/multiply/divide? If/else for choosing which ones to use?
  render() {
    return (
      <div className="Container">
        <h1>Add with React!</h1>
        <div className="add">
          <input type="number" name="num1" placeholder="Enter your first number" value={this.state.num1} onChange={ (e) => { this.setNum(e, 'num1') }} />
          <span>+</span>
          <input type="number" name="num2" placeholder="Enter your first number" value={this.state.num2} onChange={ (e) => { this.setNum(e, 'num2' )}}/>
        <button onClick={this.submitNum}>=</button>
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    )
  }
}

export default Calculator;

import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0,
      sum: 0,
      diff: 0,
      prod: 0,
      quot: 0
    }
  }

  setNum = (e, num) => {
    this.setState({ [num]: e.target.value});
    // if/else statements for which number changes? Does the [num] syntax take care of this?
  }

  addNum = () => {
    const newSum = parseInt(this.state.num1) + parseInt(this.state.num2);
    // why did this require parseInt?
    this.setState({ sum: newSum });
  }

  subtractNum = () => {
    const newDiff = parseInt(this.state.num1) - parseInt(this.state.num2);
    this.setState({ diff: newDiff });
  }
// separate functions for subtract/multiply/divide? If/else for choosing which ones to use?
  multiplyNum = () => {
    const newProd = parseInt(this.state.num1) * parseInt(this.state.num2);
    this.setState({ prod: newProd});
  }

  divideNum = () => {
    const newQuot = parseFloat(this.state.num1) / parseFloat(this.state.num2);
    this.setState({ quot: newQuot});
  }
  render() {
    return (
      <div className="Container">
        <h1>React Calculator</h1>
        <div className="add">
          <input type="number" name="num1" placeholder="Enter your first number" value={this.state.num1} onChange={ (e) => { this.setNum(e, 'num1') }} />
          <span> + </span>
          <input type="number" name="num2" placeholder="Enter your first number" value={this.state.num2} onChange={ (e) => { this.setNum(e, 'num2' )}}/>
        <button onClick={this.addNum}>=</button>
          <h3>{this.state.sum}</h3>
        </div>
        <div className="subtract">
          <input type="number" name="num1" placeholder="Enter your first number" value={this.state.num1} onChange={ (e) => { this.setNum(e, 'num1') }} />
          <span> - </span>
          <input type="number" name="num2" placeholder="Enter your first number" value={this.state.num2} onChange={ (e) => { this.setNum(e, 'num2' )}}/>
        <button onClick={this.subtractNum}>=</button>
          <h3>{this.state.diff}</h3>
        </div>
        <div className="multiply">
          <input type="number" name="num1" placeholder="Enter your first number" value={this.state.num1} onChange={ (e) => { this.setNum(e, 'num1') }} />
          <span> * </span>
          <input type="number" name="num2" placeholder="Enter your first number" value={this.state.num2} onChange={ (e) => { this.setNum(e, 'num2' )}}/>
        <button onClick={this.multiplyNum}>=</button>
          <h3>{this.state.prod}</h3>
        </div>
        <div className="divide">
          <input type="number" name="num1" placeholder="Enter your first number" value={this.state.num1} onChange={ (e) => { this.setNum(e, 'num1') }} />
          <span> / </span>
          <input type="number" name="num2" placeholder="Enter your first number" value={this.state.num2} onChange={ (e) => { this.setNum(e, 'num2' )}}/>
          <button onClick={this.divideNum}>=</button>
          <h3>{this.state.quot}</h3>
        </div>
      </div>


    )
  }
}

export default Calculator;

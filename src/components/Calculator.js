import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      num6: 0,
      num7: 0,
      num8: 0,
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
    const newDiff = parseInt(this.state.num3) - parseInt(this.state.num4);
    this.setState({ diff: newDiff });
  }
// separate functions for subtract/multiply/divide? If/else for choosing which ones to use?
  multiplyNum = () => {
    const newProd = parseInt(this.state.num5) * parseInt(this.state.num6);
    this.setState({ prod: newProd});
  }

  divideNum = () => {
    const newQuot = parseFloat(this.state.num7) / parseFloat(this.state.num8);
    this.setState({ quot: newQuot});
  }
  // data from a browser is ALWAYS a string
  // how to differentiate each of these boxes
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
          <input type="number" name="num3" placeholder="Enter your first number" value={this.state.num3} onChange={ (e) => { this.setNum(e, 'num3') }} />
          <span> - </span>
          <input type="number" name="num4" placeholder="Enter your first number" value={this.state.num4} onChange={ (e) => { this.setNum(e, 'num4' )}}/>
        <button onClick={this.subtractNum}>=</button>
          <h3>{this.state.diff}</h3>
        </div>
        <div className="multiply">
          <input type="number" name="num5" placeholder="Enter your first number" value={this.state.num5} onChange={ (e) => { this.setNum(e, 'num5') }} />
          <span> * </span>
          <input type="number" name="num6" placeholder="Enter your first number" value={this.state.num6} onChange={ (e) => { this.setNum(e, 'num6' )}}/>
        <button onClick={this.multiplyNum}>=</button>
          <h3>{this.state.prod}</h3>
        </div>
        <div className="divide">
          <input type="number" name="num7" placeholder="Enter your first number" value={this.state.num7} onChange={ (e) => { this.setNum(e, 'num7') }} />
          <span> / </span>
          <input type="number" name="num8" placeholder="Enter your first number" value={this.state.num8} onChange={ (e) => { this.setNum(e, 'num8' )}}/>
          <button onClick={this.divideNum}>=</button>
          <h3>{this.state.quot}</h3>
        </div>
      </div>


    )
  }
}

export default Calculator;

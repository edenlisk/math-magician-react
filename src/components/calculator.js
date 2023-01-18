import '../index.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (event) => {
    this.setState((prevState) => ({ ...calculate(prevState, event.target.textContent) }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-container text-center mx-auto">
        <p className="result-field border-0 mx-auto text-end text-white fs-3 fw-bold my-0">
          { next || operation || total || '' }
        </p>
        <div className="row btn-container text-center mx-auto">
          <button className="btn btn-outline-secondary rounded-0 col" onClick={this.handleClick} type="button">AC</button>
          <button className="btn btn-outline-secondary rounded-0 col" onClick={this.handleClick} type="button">+/-</button>
          <button className="btn btn-outline-secondary rounded-0 col" onClick={this.handleClick} type="button">%</button>
          <button className="rounded-0 border-secondary operator col" onClick={this.handleClick} type="button">÷</button>
        </div>
        <div className="row btn-container text-center mx-auto">
          <button className="btn btn-outline-secondary rounded-0 col" onClick={this.handleClick} type="button">7</button>
          <button className="btn btn-outline-secondary rounded-0 col" onClick={this.handleClick} type="button">8</button>
          <button className="btn btn-outline-secondary rounded-0 col" onClick={this.handleClick} type="button">9</button>
          <button className="rounded-0 border-secondary col operator" onClick={this.handleClick} type="button">x</button>
        </div>
        <div className="row btn-container text-center mx-auto">
          <button className="btn btn-outline-secondary rounded-0 col" onClick={this.handleClick} type="button">4</button>
          <button className="btn btn-outline-secondary rounded-0 col" onClick={this.handleClick} type="button">5</button>
          <button className="btn btn-outline-secondary rounded-0 col" onClick={this.handleClick} type="button">6</button>
          <button className="rounded-0 border-secondary col operator" onClick={this.handleClick} type="button">-</button>
        </div>
        <div className="row btn-container text-center mx-auto">
          <button className="btn btn-outline-secondary rounded-0 col" onClick={this.handleClick} type="button">1</button>
          <button className="btn btn-outline-secondary rounded-0 col" onClick={this.handleClick} type="button">2</button>
          <button className="btn btn-outline-secondary rounded-0 col" onClick={this.handleClick} type="button">3</button>
          <button className="rounded-0 border-secondary col operator" onClick={this.handleClick} type="button">+</button>
        </div>
        <div className="row btn-container text-center mx-auto">
          <button className="btn btn-outline-secondary rounded-0 col-6" onClick={this.handleClick} type="button">0</button>
          <button className="btn btn-outline-secondary rounded-0 col" onClick={this.handleClick} type="button">.</button>
          <button className="rounded-0 border-secondary col operator" onClick={this.handleClick} type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;

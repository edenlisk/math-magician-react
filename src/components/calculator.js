/* eslint-disable react/prefer-stateless-function */
import '../index.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-container container text-center mx-auto">
        <input className="bg-secondary result-field border-0 text-end text-white fw-bold" type="text" name="result-field" />
        <div className="row btn-container text-center mx-auto">
          <button className="btn btn-outline-secondary rounded-0 col" type="button">AC</button>
          <button className="btn btn-outline-secondary rounded-0 col" type="button">+/-</button>
          <button className="btn btn-outline-secondary rounded-0 col" type="button">%</button>
          <button className="btn btn-warning rounded-0 col" type="button">/</button>
        </div>
        <div className="row btn-container text-center mx-auto">
          <button className="btn btn-outline-secondary rounded-0 col" type="button">7</button>
          <button className="btn btn-outline-secondary rounded-0 col" type="button">8</button>
          <button className="btn btn-outline-secondary rounded-0 col" type="button">9</button>
          <button className="btn btn-warning rounded-0 col operator" type="button">x</button>
        </div>
        <div className="row btn-container text-center mx-auto">
          <button className="btn btn-outline-secondary rounded-0 col" type="button">4</button>
          <button className="btn btn-outline-secondary rounded-0 col" type="button">5</button>
          <button className="btn btn-outline-secondary rounded-0 col" type="button">6</button>
          <button className="btn btn-warning rounded-0 col operator" type="button">-</button>
        </div>
        <div className="row btn-container text-center mx-auto">
          <button className="btn btn-outline-secondary rounded-0 col" type="button">1</button>
          <button className="btn btn-outline-secondary rounded-0 col" type="button">2</button>
          <button className="btn btn-outline-secondary rounded-0 col" type="button">3</button>
          <button className="btn btn-warning rounded-0 col operator" type="button">+</button>
        </div>
        <div className="row btn-container text-center mx-auto">
          <button className="btn btn-outline-secondary rounded-0 col-6" type="button">0</button>
          <button className="btn btn-outline-secondary rounded-0 col" type="button">.</button>
          <button className="btn btn-warning rounded-0 col operator" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;

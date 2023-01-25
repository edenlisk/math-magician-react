import '../index.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (event) => {
    setState((prevState) => ({
      prevState, ...calculate(prevState, event.target.textContent),
    }));
  };

  const { total, next, operation } = state;
  return (
    <div className="container d-flex justify-content-center py-5">
      <div className="flex-fill">
        <h5>Let&apos;s do the math!</h5>
      </div>
      <div className="flex-fill border border-3 border-dark justify-content-center py-3">
        <div className="calculator-container text-center mx-auto">
          <p className="result-field border-0 mx-auto text-end text-white fs-3 fw-bold my-0">
            { next || operation || total || '' }
          </p>
          <div className="row btn-container text-center mx-auto">
            <button className="btn btn-outline-secondary rounded-0 col" onClick={handleClick} type="button">AC</button>
            <button className="btn btn-outline-secondary rounded-0 col" onClick={handleClick} type="button">+/-</button>
            <button className="btn btn-outline-secondary rounded-0 col" onClick={handleClick} type="button">%</button>
            <button className="rounded-0 border-secondary operator col" onClick={handleClick} type="button">÷</button>
          </div>
          <div className="row btn-container text-center mx-auto">
            <button className="btn btn-outline-secondary rounded-0 col" onClick={handleClick} type="button">7</button>
            <button className="btn btn-outline-secondary rounded-0 col" onClick={handleClick} type="button">8</button>
            <button className="btn btn-outline-secondary rounded-0 col" onClick={handleClick} type="button">9</button>
            <button className="rounded-0 border-secondary col operator" onClick={handleClick} type="button">x</button>
          </div>
          <div className="row btn-container text-center mx-auto">
            <button className="btn btn-outline-secondary rounded-0 col" onClick={handleClick} type="button">4</button>
            <button className="btn btn-outline-secondary rounded-0 col" onClick={handleClick} type="button">5</button>
            <button className="btn btn-outline-secondary rounded-0 col" onClick={handleClick} type="button">6</button>
            <button className="rounded-0 border-secondary col operator" onClick={handleClick} type="button">-</button>
          </div>
          <div className="row btn-container text-center mx-auto">
            <button className="btn btn-outline-secondary rounded-0 col" onClick={handleClick} type="button">1</button>
            <button className="btn btn-outline-secondary rounded-0 col" onClick={handleClick} type="button">2</button>
            <button className="btn btn-outline-secondary rounded-0 col" onClick={handleClick} type="button">3</button>
            <button className="rounded-0 border-secondary col operator" onClick={handleClick} type="button">+</button>
          </div>
          <div className="row btn-container text-center mx-auto">
            <button className="btn btn-outline-secondary rounded-0 col-6" onClick={handleClick} type="button">0</button>
            <button className="btn btn-outline-secondary rounded-0 col" onClick={handleClick} type="button">.</button>
            <button className="rounded-0 border-secondary col operator" onClick={handleClick} type="button">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

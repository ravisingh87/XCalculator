import React, { useState } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';
const Calculator = () => {
  const [inputVal, setInputVal] = useState([]);
  const [result, setResult] = useState('');

  const handleChange = (val) => {
    if (val === 'C') {
      setInputVal([]);
      setResult('');
    } else if (val === '=') {
      if (inputVal.length > 0) {
        let res = evaluate(inputVal.join(''));
        setResult(res);
        setInputVal([]);
      } else {
        setResult('Error');
      }
    } else {
      setInputVal([...inputVal, val]);
    }
  };

  return (
    <div className="container">
      <input type="text" value={inputVal.join('')} readOnly />
      <div className="result">{result}</div>
      <div className="wrapper">
        <div className="num_wrapper">
          <button onClick={() => handleChange('7')}>7</button>
          <button onClick={() => handleChange('8')}>8</button>
          <button onClick={() => handleChange('9')}>9</button>
          <button onClick={() => handleChange('+')}>+</button>
        </div>
        <div className="num_wrapper">
          <button onClick={() => handleChange('4')}>4</button>
          <button onClick={() => handleChange('5')}>5</button>
          <button onClick={() => handleChange('6')}>6</button>
          <button onClick={() => handleChange('-')}>-</button>
        </div>
        <div className="num_wrapper">
          <button onClick={() => handleChange('1')}>1</button>
          <button onClick={() => handleChange('2')}>2</button>
          <button onClick={() => handleChange('3')}>3</button>
          <button onClick={() => handleChange('*')}>*</button>
        </div>
        <div className="num_wrapper">
          <button onClick={() => handleChange('C')}>C</button>
          <button onClick={() => handleChange('0')}>0</button>
          <button onClick={() => handleChange('=')}>=</button>
          <button onClick={() => handleChange('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

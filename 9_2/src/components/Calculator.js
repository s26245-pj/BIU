import React from 'react';
import { useLocation } from 'react-router-dom';

const Calculator = ({ operation }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = parseFloat(params.get('x'));
  const y = parseFloat(params.get('y'));

  let result;
  if (isNaN(x) || isNaN(y)) {
    result = "Invalid parameters";
  } else {
    switch (operation) {
      case 'add':
        result = x + y;
        break;
      case 'sub':
        result = x - y;
        break;
      case 'mul':
        result = x * y;
        break;
      case 'div':
        result = y !== 0 ? x / y : 'Cannot divide by zero';
        break;
      default:
        result = 'Unknown operation';
    }
  }

  return (
    <div>
      <h1>Calculator</h1>
      <p>Operation: {operation}</p>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;

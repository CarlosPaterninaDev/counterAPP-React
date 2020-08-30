import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterAPP = ({ value = 0 }: any) => {
  const [counter, setcounter] = useState(value);

  console.log({ counter });
  console.log({ setcounter });

  // handleAdd
  const handleAdd = () => {
    setcounter(counter + 1);
    // setcounter((c) => c + 1);
  };

  const handleReset = () => {
    setcounter(value);
    // setcounter((c) => c + 1);
  };

  const handleSubtract = () => {
    setcounter(counter - 1);
    // setcounter((c) => c + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+ 1</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleSubtract}>- 1</button>
    </>
  );
};

CounterAPP.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterAPP;

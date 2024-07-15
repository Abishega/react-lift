import React, { useState } from 'react';
import './style.css';
import Lift from './Lift';
import Input from './Input';

export default function App() {
  const [inputVal, setInputval] = useState(0);
  const [currentVal, setCurrentVal] = useState(inputVal);
  const [isSubmitted, setSubmitted] = useState(false);

  return (
    <div>
      <Input
        setInputval={setInputval}
        currentVal={currentVal}
        inputVal={inputVal}
        isSubmitted={isSubmitted}
        setSubmitted={setSubmitted}
        setCurrentVal = {setCurrentVal}
      />
      <Lift inputVal={inputVal} currentVal={currentVal} />
    </div>
  );
}

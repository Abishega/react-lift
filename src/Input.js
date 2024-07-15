import React, { useEffect } from 'react';

export default function Input({
  setInputval,
  currentVal,
  inputVal,
  isSubmitted,
  setSubmitted,
  setCurrentVal,
}) {
  useEffect(() => {
    let id;
    const handleFloor = () => {
      if (currentVal < inputVal) {
        id = setInterval(() => {
          setCurrentVal((prevVal) => {
            let nextVal = prevVal + 1;
            if (nextVal === inputVal) {
              clearInterval(id);
            }

            return nextVal;
          });
        }, [1000]);
      } else if (currentVal > inputVal) {
        id = setInterval(() => {
          setCurrentVal((prevVal) => {
            let nextVal = prevVal - 1;
            if (nextVal === inputVal) {
              clearInterval(id);
            }

            return nextVal;
          });
        }, [1000]);
      }
    };
    if (isSubmitted) {
      handleFloor();
    }
    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [isSubmitted, currentVal, inputVal]);

  const handleInputChange = (e) => {
    setInputval(e.target.value);
  };
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <input type="number" onChange={(e) => handleInputChange(e)} />
      <button onClick={handleSubmit}>Start</button>
    </div>
  );
}

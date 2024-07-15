import React from 'react';
import { useEffect } from 'react';

export default function Lift({ inputVal, currentVal }) {
  useEffect(() => {}, []);

  const liftGrid = () => {
    let grid = [];

    for (let i = 0; i < 11; i++) {
      grid.push(
        <div className={currentVal === i ? 'child higlighted' : 'child'}>
          {i}
        </div>
      );
    }
    return grid;
  };

  return (
    <div>
      <div>Floor:{currentVal} </div>
      <div className="parent"> {liftGrid()} </div>
    </div>
  );
}

import React, { useState } from 'react';
import "../React_js_assign_mod_3/IncreDecre.css"

function IncreDecre() {

  let [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='main'>
      <div className="sub">
        <div className="pera">
          <p>Counter: {count}</p>
        </div>
        <div className='button'>
          <button className="buttincre" onClick={increment}>Increment</button>
          <button className="buttdecre" onClick={decrement}>Decrement</button>

        </div>
      </div>
    </div>
  );
}

export default IncreDecre;
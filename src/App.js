import React, { useState } from "react";

//useState
function Counter() {
  const [count, setCount] = useState(0);

  // Reset button
  const onReset = () => {
    setCount(0);
  };

  // Buttons
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <button onClick={() => onReset(0)}>Reset</button>
      <p>You clicked {count} times</p>
    </div>
  );
}

// Ausgabe
export default Counter;

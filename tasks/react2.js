

import React, { useState } from "react";

export function Fruits({ fruits }) {
  console.log("Fruits render");
  return <div>{fruits.join(",")}</div>;
}

export function App() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prev) => ++prev);
  };

  const fruits = ["App", "pear", "banana"];

  return (
    <div className="App">
      <label>
        <button type="button" onClick={handleCounter}>
          Add
        </button>
        {"-"}
        {counter}
      </label>

      <Fruits fruits={fruits} />
    </div>
  );
}

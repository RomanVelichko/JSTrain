// Происходит рендер другого компонента

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

// ------------ // ------------ // ------------ // ------------ //
// VERSION 1

import React, { useState } from "react";

export function Fruits({ fruits }) {
  console.log("Fruits render");
  return <div>{fruits.join(",")}</div>;
}

// вынесли компонент и его логику с состоянием
export function Button() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prev) => ++prev);
  };

  return (
    <label>
        <button type="button" onClick={handleCounter}>
          Add
        </button>
        {"-"}
        {counter}
      </label>
  )
}

export function App() {
  const fruits = ["App", "pear", "banana"];

  return (
    <div className="App">
      <Button />
      <Fruits fruits={fruits} />
    </div>
  );
}


// ------------ // ------------ // ------------ // ------------ //
// VERSION 2
// Добавить useMemo и React.memo()


import React, { useState, useMemo } from "react";

export const Fruits = React.memo(({ fruits }) => {
  console.log("Fruits render");
  return <div>{fruits.join(",")}</div>;
})

export function App() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prev) => ++prev);
  };

  const fruits = useMemo(() => ["App", "pear", "banana"],[])

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

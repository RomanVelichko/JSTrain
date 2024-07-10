
/** Оптимизировать  */

import { useState } from "react";

export default function App() {
  return (
    <CustomWraper>
      <ExpensiveTree />
    </CustomWraper>
  );
}

function ExpensiveTree() {
  let now = performance.now();
  while (performance.now() - now < 100) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component tree.</p>;
}

function CustomWraper(props) {
  let [color, setColor] = useState("red");

  return (
    <div style={{ backgroundColor: color }}>
    <input value={color} onChange={(e) => setColor(e.target.value)} />
    <p style={{ color }}>Hello, world!</p>
    {props.children}
  </div>
  )
}

//-----------//-------------//-------------//-----------//--------------//

import "./styles.css";
import { useState, memo } from "react";

const ExpensiveTree = () => {
  let now = performance.now();
  while (performance.now() - now < 100) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component tree.</p>;
};

const ExpensiveTreeMemoized = memo(ExpensiveTree);

export default function App() {
  return (
    <div style={{ backgroundColor: "green" }}>
      <Color />
      <ExpensiveTreeMemoized />
    </div>
  );
}

const Color = () => {
  let [color, setColor] = useState("red");

  const handleChange = ({ target }) => {
    setColor(target.value);
  };

  return (
    <>
      <input value={color} onChange={handleChange} />
      <p style={{ color }}>Hello, world!</p>
    </>
  );
};

import { useState } from "react";
import BackButton from "../components/BackButton";

const HookUseState: React.FC = () => {
  // State
  const [isOn, setIsOn] = useState(false);

  // Event handler
  const handleClick = () => {
    setIsOn((prev) => !prev);
  };

  // Conditionally set the value of the button legend
  return (
    <section className="section">
      <button type="button" onClick={handleClick} className="button">
        {isOn ? "On" : "Off"}
      </button>
      <h1>Use Cases</h1>
      <p>Varied, used to keep track of many different items, such as</p>
      <ul className="list">
        <li className="list-item">Toggling - show and hide elements</li>
        <li className="list-item">Adding items to a cart</li>
        <li className="list-item">
          Passing a flag to a function anywhere you need to
        </li>
        <li className="list-item">
          useState ensures that whatever the value of a state variable is, that
          that value will be the same when the component re-renders.
        </li>
        <li className="list-item">
          In addition to that, if you use the setter function of useState, not
          only do you change the value, you also trigger a re-render
        </li>
        <li className="listitem">
          Because there might be other parts of the component relying on the
          state variable.
        </li>
      </ul>
      <BackButton />
    </section>
  );
};

export default HookUseState;

//import { useState } from "react";

import BackButton from "../components/BackButton";
import callbackExampleImage from "/callback-example.avif";

const HookUseCallback: React.FC = () => {
  return (
    <div>
      <img src={callbackExampleImage} className="callback-example-image" />
      <h1>useCallback</h1>

      <ul className="list">
        <li className="list-item">
          When you want to memoize an entire function
        </li>
        <li className="list-item">
          useMemo can be used for expensive computation
        </li>
        <li className="list-item">
          When you define a function in a component, a new function object is
          created each time the component is rerendered.
        </li>
      </ul>
      <p>Use Cases</p>
      <ul className="list">
        <li className="list-item">
          When you pass the component down to multiple child components
        </li>
        <li className="list-item">
          By wrapping the component in useCallback we can prevent unnecessary
          rerenders othe component because they will always be using the same
          function object
        </li>
      </ul>
      <BackButton />
    </div>
  );
};

export default HookUseCallback;

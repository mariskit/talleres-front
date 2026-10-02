import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="counter-wrapper">
      <div className="counter-card" id="counter-card">
        <div className="counter-controls">
          <button
            className="counter-btn"
            id="btn-decrement"
            onClick={decrement}
            aria-label="Disminuir cantidad"
          >
            &minus;
          </button>
          <span className="counter-display" id="counter-display">
            {count}
          </span>
          <button
            className="counter-btn"
            id="btn-increment"
            onClick={increment}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>
      </div>
      <p className="counter-label" id="counter-label">
        estudiantes inscritos
      </p>
    </div>
  );
}

export default Counter;

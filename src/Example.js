import React, { useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        class="btn btn-outline-primary"
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
      <button
        class="btn btn-outline-danger"
        onClick={() => setCount(count - 1)}
      >
        Subtract
      </button>
      <button class="btn btn-outline-warning" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

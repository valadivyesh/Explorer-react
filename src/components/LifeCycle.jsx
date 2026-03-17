import { useEffect, useState } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
    return () => console.log("Component Unmounted");
  }, [count]);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Lifecycle</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Lifecycle;
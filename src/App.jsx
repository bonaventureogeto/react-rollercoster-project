import { useState, useRef } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { Link } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  const count = useRef(0);
  const boxRef = useRef(null);

  const handleColorChange = () => {
    // Access the DOM node using the ref.current property and set its background color to red
    boxRef.current.style.backgroundColor = "black";
  };

  // const handleIncrement = () => setCount(count + 1);
  // const handleDecrement = () => setCount(count - 1);

  const handleIncrement = () => {
    count.current += 1;
    forceUpdate(); // Trigger a re-render
  };
  const handleDecrement = () => {
    count.current -= 1;
    forceUpdate(); // Trigger a re-render
  };

  const [_, setCount] = useState(0); 
  const forceUpdate = () => {
    // Update the state to force a re-render
    setCount((prev) => prev + 1);
  }

  return (
    <div ref={boxRef}>
      <h1>Hello!</h1>
      <h1>Welcome to my Application</h1>
      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        count={count.current}
      />
      <div>
        {/* Button to handle color change */}
        <button className="button" onClick={handleColorChange}>
          Change Color
        </button>
      </div>
      <div>
        <Link to="/display-data">Display Data</Link>
      </div>
      <div>
        <Link to="/rick-and-morty">Rick and Morty</Link>
      </div>
      <div>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
}

export default App;

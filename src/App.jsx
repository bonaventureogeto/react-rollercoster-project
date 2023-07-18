import { useState, useRef, useReducer } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { Link } from "react-router-dom";


//NOTE: State is read-only. Don’t modify any objects or arrays in state: instead, 
// return a new object or array that includes the changes you want to make.
const countReducer = (state, action)=>{
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      break;
  }
}

function App() {
  // const [count, setCount] = useState(0);
  // const count = useRef(0);
  const boxRef = useRef(null);

  const [state, dispatch] = useReducer(countReducer, {count: 0});

  const handleColorChange = () => {
    // Access the DOM node using the ref.current property and set its background color to red
    boxRef.current.style.backgroundColor = "black";
  };

  const handleIncrement = () => {
    dispatch({type: 'increment'})
  }

  const handleDecrement = () => {
    dispatch({type: 'decrement'})
  }

  // const handleIncrement = () => setCount(count + 1);
  // const handleDecrement = () => setCount(count - 1);

  // const handleIncrement = () => {
  //   count.current += 1;
  //   forceUpdate(); // Trigger a re-render
  // };
  // const handleDecrement = () => {
  //   count.current -= 1;
  //   forceUpdate(); // Trigger a re-render
  // };

  // const [_, setCount] = useState(0); 
  // const forceUpdate = () => {
  //   // Update the state to force a re-render
  //   setCount((prev) => prev + 1);
  // }

  return (
    <div ref={boxRef}>
      <h1>Hello!</h1>
      <h1>Welcome to my Application</h1>
      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        count={state.count}
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

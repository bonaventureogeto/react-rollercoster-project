import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => setCount(count - 1);

  return (
    <>
      <h1>Hello!</h1>
      <h1>Welcome to my Application</h1>
      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        count={count}
      />
      <div>
        <Link to="/display-data">Display Data</Link>
      </div>
      <div>
        <Link to="/rick-and-morty">Rick and Morty</Link>
      </div>
      <div>
        <Link to="/users">Users</Link>
      </div>
    </>
  );
}

export default App

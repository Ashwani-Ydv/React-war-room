import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Child from './components/Child'

function App() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    console.log('Incremented');
    setCount(count + 1);
  }
  const Decrement = () => {
    console.log('Decremented');
    setCount(count - 1);
  }
  const Reset = () => {
    console.log('Reset');
    setCount(0);
  }
  return (
    <div className="App">
      <h1>Parent Component</h1>
      {count}
      <Child Increment={Increment} Decrement={Decrement} Reset={Reset} />
    </div>
  );
}

export default App;

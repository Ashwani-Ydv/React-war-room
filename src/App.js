import './App.css';
import { useState } from 'react';
// import Child from './components/Child'

function App() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    console.log('Incremented');
    setCount(count + 1);
  }
  const Decrement = () => {
    if (count >= 1) {
      console.log('Decremented');
      setCount(count - 1);
    }
  }

  const Reset = () => {
    console.log('Reset');
    setCount(0);
  }
  return (
    <div className="App">
      <h1>Parent Component</h1>
      <button onClick={Decrement} >Decrement</button> {count} <button onClick={Increment} >Increment</button>
      <button onClick={Reset} >Reset</button>
      {/* <Child Increment={Increment} Decrement={Decrement} Reset={Reset} /> */}
    </div>
  );
}

export default App;

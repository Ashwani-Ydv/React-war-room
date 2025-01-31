import React from 'react';

const Child = (Increment, Decrement, Reset) => {
    return (
        <div>
            <h1>Child Component</h1>
            <button onClick={Increment.Increment}>Increment</button>
            <button onClick={Decrement.Decrement}>Decrement</button>
            <button onClick={Reset.Reset}>reset</button>
        </div>
    );
}

export default Child;
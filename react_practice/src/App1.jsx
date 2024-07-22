import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App1() {
  const [count, setCount] = useState(0);

  const increaseValue = () => {
    if(count == 20)
      return;

    // setState is asynchronous and updates are batched, meaning multiple "setState" calls in the same function will not immediately reflect the changes in state. Instead, the state will be updated based on its current value at the time of the batch update, leading to only one increament. 
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);


    /*
        Let's take another example, 
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count-1)

        In this example, the setCount function call will not work as expected due to the asynchronous nature of state updates in React. Each "setCount" call doesn't immediately update the state, and all the state updates are batched together. As a result, only the last "setCount" call will be considered. Because of batching of the all the function calls, only the value will be decreased by 1(the last call). 

    */
  }
  const decreaseValue = () => {
    if(count == 0)
      return;
    setCount(count-1);
    setCount(count-1);
    setCount(count-1);
    setCount(count-1);
  }

  return (

    <>
      <h1>
        Current value : {count}
      </h1>
      <button onClick={increaseValue}>
        Increase
      </button>
      <button onClick={decreaseValue}>
        Decrease
      </button>
    </>
  )
}

export default App1

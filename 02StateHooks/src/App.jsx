import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);    // counter -> variable, setCounter -> method 
  // counter variable is being used in many places. The major problem, even if we change the value of counter is not reflected on the UI side. So, we use a "setCounter" method to fulfil this purpose. Basically, whatever value has been passed as an argument to the setCounter, it changes to that value in the UI wherever counter is being used. 

  const increaseValue = () => {
    if(counter == 20)
        return;
    counter += 1;
    setCounter(counter);
    console.log(counter);
  }
  
  const decreaseValue = () => {
    if(counter == 0)
        return;
    counter -= 1;
    setCounter(counter);
    console.log(counter);
  }

  return (
    <>
      <h1>Hello from Pratyush !</h1>
      <h2>How are you ?</h2>
      <h3>Counter : {counter}</h3>
      <button
        onClick = {increaseValue}
      >
        Increase value {counter}
      </button>
      <br />
      <button
        onClick = {decreaseValue}
      >
        Decrease value {counter}
      </button>
    </>
  )
}

export default App

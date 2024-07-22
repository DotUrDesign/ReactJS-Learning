import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Comp1 from './components/Comp1'

function App() {

  const myArr = [1, 2, 3];
  const myObj = {
    name : "Prats",
    grade : "A",
    hobbies : ["Badminton", "Dance", "Coding"]
  };

  return (
    <>
      <h1>Hello World !</h1>
      <Card username = "Pratyush" btnText="View Profile" />
      <Card username = "PratS" />

      {/* Curely brackets are required as we have to pass the props as variables */}
      <Comp1 myArr={myArr} object={myObj}/>    
    </>
  )
}

export default App

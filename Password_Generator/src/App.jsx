import { useState, useEffect, useCallback, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // This is how we define the useStates for different use-cases...
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false); 


  // useRef hook
  const passwordRef = useRef(null)

  // Actual logic for generating the password...
  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed)
      str += "0123456789";
    if(charAllowed)
      str += "!@#$%^&*-_+=[]{}~`"

    let password = "";
    for(let i=0;i<length;i++) {
      password += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(password);
  },[length, numberAllowed, charAllowed, setPassword] );

  /*
   If any change in the length input range or number checkbox or characters checkbox, then the passwordGenerator() function will be triggered...And for that reason, we will use useEffect() hook here...
   Syntax of useEffect hook - 
  useEffect(() => {
      function to be triggered
  }, [dependencies on which the function will get triggered, when any of these dependencies will get changed. ] )

    */
  
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // the selection of the text and copying it into the clipboard can also be done without any useRef hook. The use of useRef hook is to only show the user that the password has been copied successfully. 
  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <input
        type="text"
        value = {password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref = {passwordRef}
      />
      <button
        onClick = {copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >Copy</button>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
  )
}

export default App

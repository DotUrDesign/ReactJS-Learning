import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Custom Render !</h1>
    </div>
  )
}

const reactElement = {
  type : 'a',
  props : {
      href : "https://google.com",
      target : "_blank"
  },
  children : "Click to visit Google"
}

const reactElement2 = (
  <a href="https://google.com" target="_blank">Click to visit Google</a>
)

const reactElement3 = React.createElement(
  'a',
  {href : "https://google.com", target : "_blank"},
  "Click to visit Google"
);

ReactDOM.createRoot(document.getElementById('root')).render(

    // Point to note - Every function/component which we declare, gets converted into an object. And the arguments passed to the render function should either be a function or if it's not a function, it should be at least follow the syntax of "createElement" of "React".

    // <MyApp />    // Same as MyApp(), but we never use this way of calling functions, as there are some predefined way of writing the code. 

    // <App />     // Normal way of invoking a component 

    // reactElement   ---> This won't work as reactElement is defined with its own syntax. If it is to be passed as an argument to the render function, then it should follow the "React.createElement()" syntax. 

    // reactElement2   // This will work


    reactElement3    // This will work as thhe syntax followed, is given by "React.createElement"

)

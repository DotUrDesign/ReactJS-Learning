import Greet from "./Greet"

function App() {
  const username = "Pratyush";

  return (
    <>
      <h1>Hello world using vite </h1>
      {/* {username}  --> Evaluated expression, no logic part should be present there. */}
      <h2>Hello {username}</h2>   
      <Greet />
    </>
  )
}

export default App

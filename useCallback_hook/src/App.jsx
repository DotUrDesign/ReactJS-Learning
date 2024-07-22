import { useState, useEffect, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ItemsList } from './ItemsList'

function App() {
  const [items, setItems] = useState([
    "Item 1", 
    "Item 2", 
    "Item 3", 
    "Item 4", 
    "Item 5"
  ])

  const [count, setCount] = useState(items.length);
  
  /*
    1. useCallback hook - This hook is especially used for caching purposes. It helps to keep a function from being recreated on every render. This is useful for performance, especially for passing functions to child components.

    2. Use of useCallback 
      - Performance Optimisation : Prevents unnecessary re-renders of child components that rely on "addItem".
      - Stable References : Ensures that the "addItem" function has a stable reference unless its dependency changes. 

    3. What should be inside the dependencies array - Contains the variables on which the function is dependent on. 
  */
  const addItem = useCallback(() => {
    if(count >= 10)
      return;
    let str = "Item " + (count + 1);
    items.push(str);
    setItems(items);
    setCount(count+1);
  }, [count]);

  const deleteItem = useCallback(() => {
    if(count == 0)
        return;
    items.pop();
    setItems(items);
    setCount(count-1);
  }, [count]);

  return (
    <div>
      <ItemsList items={items} />
      <button
        type="text"
        onClick={addItem}
      >
        Add Item : {count}
      </button>
      <button
        onClick={deleteItem}
      >
        Delete Item : {count}
      </button>
    </div>
  )
}

export default App

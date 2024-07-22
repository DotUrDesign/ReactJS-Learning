// How to deal with the problem faced in App1.jsx

import {useState} from 'react';

function App2() {
    const [count, setCount] = useState(0);

    const increaseValue = () => {
        if(count + 4 > 20)
            return;

        setCount((prev) => prev+1);
        setCount((prev) => prev+1);
        setCount((prev) => prev+1);
        setCount((prev) => prev+1);
    }

    const decreaseValue = () => {
        if(count-3 < 0)
            return;

        setCount((prev) => prev-1);
        setCount((prev) => prev-1);
        setCount((prev) => prev-1);
    }

    return (
        <>
            <h1>Current value : {count}</h1>
            <button onClick={increaseValue}>
                Increase by 4
            </button>
            <button onClick={decreaseValue}>
                Decrease by 3
            </button>
        </>
    )
}

export default App2;
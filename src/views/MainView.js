import React, {useEffect, useState} from 'react';

export const MainView = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        // Render at start
        alert("using useEffect in the beginning");

        // Render at end/switching component
        return () => {
            alert("using useEffect in the end")
        }
    }, [count])

    return ( <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment with 1</button>
    </div>

    )
}
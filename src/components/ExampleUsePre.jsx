import React, { useState, useEffect } from 'react';
import UsePrevious from './UsePrevious';

function ExampleUsePre() {
    const [count, setCount] = useState(0);
    const previousCount = UsePrevious(count);

    useEffect(() => {
        // console.log(`Current count: ${count}`);
        // console.log(`Previous count: ${previousCount}`);
    }, [count, previousCount]);

    return (
        <div>
            <p>Current Count: {count}</p>
            <p>Previous Count: {previousCount}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
}

export default ExampleUsePre;

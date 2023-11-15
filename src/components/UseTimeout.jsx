import { useEffect, useRef } from 'react';

function UseTimeout(callback, delay) {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    useEffect(() => {
        const id = setTimeout(() => callbackRef.current(), delay);
        console.log(id);

        // Cleanup function
        return () => clearTimeout(id);
    }, [delay, callback]);

    // You can return something if needed, or leave it as an empty fragment
    return null;
}

export default UseTimeout;

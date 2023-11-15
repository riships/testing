import { useEffect, useRef } from 'react';

function UseTimeout(callback, delay) {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    useEffect(() => {
        if (delay === null || typeof delay !== "number") {
            console.log('Time is not defined');
        } else {
            // id is used to use timer for the specific id which is coming from the backend
            const id = setTimeout(() => callbackRef.current(), delay);
            // console.log(id);

            // Cleanup function
            return () => clearTimeout(id);
        }
    }, [delay, callback]);

    // You can return something if needed, or leave it as an empty fragment
    return null;
}

export default UseTimeout;

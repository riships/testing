import { useEffect, useRef } from 'react';

function UsePrevious(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

export default UsePrevious;

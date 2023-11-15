import React from 'react'
import UseTimeout from './UseTimeout';

function InterVal() {
    const handleDelayedAction = () => {
        console.log('Delayed action executed!');
    };

    UseTimeout(handleDelayedAction, 2000);
    return (
        <div>interVal</div>
    )
}

export default InterVal;
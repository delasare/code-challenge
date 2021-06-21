import * as React from 'react';
import { useCount } from './myFeed-context';


function MyFeedDisplay() {
    const { state: { count }, } = useCount();
    return <div>{`The current count is ${count}`}</div>
}


function MyFeedUrls() {
    const { dispatch } = useCount();
    return (
        <>
            <button onClick={() => { dispatch({ type: 'increment' }) }}>
                Increment Count;
            </button>
            <button onClick={() => { dispatch({ type: 'decrement' }) }}>
                Decrement Count;
            </button>
        </>
    ) 
}

export {MyFeedDisplay, MyFeedUrls}

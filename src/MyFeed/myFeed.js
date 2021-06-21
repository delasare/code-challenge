import React, { useState }  from 'react';
import { useMyFeed } from './myFeed-context';


function MyFeedDisplay() {
    const { state: { url }, dispatch } = useMyFeed();
    const [ myUrl, setMyUrl ] = useState();

    const onInputChange = (e) => {
        setMyUrl(e.target.value);
    }
    const handleClickToSave = () => {
        dispatch({ type: 'add-url', payload: myUrl });
    }
        
    return (
        <form>
            <div>URL: <input type='url' value={myUrl} onChange={onInputChange} /></div>
            <div>Input  {myUrl}</div>
            <button onSubmit={() => handleClickToSave()}>
                Add URL
            </button>
        </form>
    );
}


function MyFeedUrls() {
    const { state: { myUrls }  } = useMyFeed();
    return (
        <>
        <div>My URLS:</div> 
        <ul>
                {myUrls && myUrls.map(x => <li>{x}</li>)}
                </ul>
        </>
    ) 
}

export {MyFeedDisplay, MyFeedUrls}

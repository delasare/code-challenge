import React, { useState, useEffect }  from 'react';
import { useMyFeed } from './myFeed-context';


import './MyFeed.css';



const apiResponse = [
    {
        url: 'http://www.google-test.com',
        userName: 'auser',
        engamement: {
            clicked: 0,
            liked: 1,
            disliked: 6,
            comments: [{ userId: 12, comment: 'Not Good' }],
            score: 20,
            share: 5,
        }
    }
];


function MyFeedDisplay() {
    const { dispatch } = useMyFeed();
    const [myUrl, setMyUrl] = useState();
    const [error, setError] = useState(false);

    const onInputChange = (e) => {
        setMyUrl(e.target.value);
    }
    const handleClickToSave = () => {
        console.log('myUrl.indexOf', myUrl.indexOf('http'))
        if (myUrl.indexOf('http') === 0) {
            setError(false);
            const myLink = {
                url: myUrl,
                userName: 'rdelasalas',
                engamement: {
                    clicked: 0,
                    liked: 0,
                    disliked: 0,
                    comments: [],
                    score: 0,
                    share: 0,
                }
            }   
            dispatch({ type: 'add-url', payload: myLink });    
        } else {
            setError(true)
        }
    }

    useEffect(() => {
        dispatch({ type: 'add-external-urls', payload: apiResponse });
    }, []) // eslint-disable-line
        
    return (
        <>
            <div>URL: <input type='url' value={myUrl} onChange={onInputChange} /></div>
            {error && <div className="error">Please insert a valid url</div>}

            <button onClick={() => handleClickToSave()}>
                Add URL
            </button>
        </>
    );
}


function MyFeedUrls() {
    const { state: { incomingUrls }  } = useMyFeed();
    return (
        <>
        <h2>My Feed:</h2> 
            <ul>
                {incomingUrls && incomingUrls.map((x, index) => <li className='card' key={`${index + 100}`}>
                    <div><a href={x.url}>{x.url}</a></div>
                    <div>
                        <button>Like</button>
                        <button>Dislike</button>
                        <button> Share</button>
                    </div>
                    
                    <div><strong>Submitted: </strong> {x.userName}</div>
                    <div>
                        <strong>Liked: </strong><span className="engage">{x.engamement.liked}</span>
                        <strong>Disliked: </strong><span className="engage">{x.engamement.disliked}</span>
                        <strong>Clicked: </strong><span className="engage">{x.engamement.clicked}</span> 
                        <strong>Shared: </strong><span className="engage">{x.engamement.share}</span>
                    </div>
                </li>)}
            </ul>
        </>
    ) 
}

export {MyFeedDisplay, MyFeedUrls}

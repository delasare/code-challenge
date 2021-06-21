import * as React from 'react';
const MyFeedContext = React.createContext();


function myFeedReducer(state, action) {
    switch (action.type) {
        case 'add-url': {
            const { incomingUrls } = state;
            return {...state, incomingUrls: [...incomingUrls, action.payload]};
        }
        case 'add-external-urls': {
            console.log('EXTERNAL');
            return { incomingUrls: action.payload };
        }
        default: {
            console.log('HERE?');
            return state;
        }
    }
}

function MyFeedProvider({ children }) {
    const initialFeedState = {
        incomingUrls: [],
    }
    const [state, dispatch] = React.useReducer(myFeedReducer, initialFeedState)
    const value = { state, dispatch };
    return <MyFeedContext.Provider value={value}>{children}</MyFeedContext.Provider>
}

function useMyFeed() {
    const context = React.useContext(MyFeedContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a Context Provider');
    }
    return context;
}



export { MyFeedProvider, useMyFeed };

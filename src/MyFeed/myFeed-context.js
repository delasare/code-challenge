import * as React from 'react';
const MyFeedContext = React.createContext();


const initialFeedState = {
    myUrls: [],
    incomingUrls: [],
}


function myFeedReducer(state, action) {
    switch (action.type) {
        case 'add-url': {
            const { myUrls } = state;
            let test = myUrls ? myUrls : [];
            return {...state, myUrls: [...test, action.payload]};
        }
        case 'remove-url': {
            return { url: state.count - 1 };
        }
        default: {
            return {...initialFeedState}
        }
    }
}

function MyFeedProvider({ children }) {
    const [state, dispatch] = React.useReducer(myFeedReducer, { count: 0 })
    const value = { state, dispatch };
    console.log('STATE', state);
    return <MyFeedContext.Provider value={value}>{children}</MyFeedContext.Provider>
}

function useMyFeed() {
    const context = React.useContext(MyFeedContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a Context Provider');
    }
    console.log('CONTEXT', context);
    return context;
}



export { MyFeedProvider, useMyFeed };

import * as React from 'react';
const MyFeedContext = React.createContext();


function myFeedReducer(state, action) {
    switch (action.type) {
        case 'increment': {
            return { count: state.count + 1 };
        }
        case 'decrement': {
            return { count: state.count - 1 };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function MyFeedProvider({ children }) {
    const [state, dispatch] = React.useReducer(myFeedReducer, { count: 0 })
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

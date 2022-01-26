const reducerFunction = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [...state, action.chatMessage];
        case 'SET_MESSAGES':
            return action.chatMessages;
        default:
            return state;
    }
};
export default reducerFunction;

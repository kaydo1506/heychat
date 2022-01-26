const reducerFunction = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [...state, action.chatMessages];
        case 'SET_MESSAGES':
            return action.chatMessages;
        default:
            return state;
    }
};
export default reducerFunction;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerFunction from '../reducer/reducerFunction';

export const configureStore = () => {
    const store = createStore(reducerFunction, applyMiddleware(thunk));
    return store;
};

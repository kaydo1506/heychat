import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './firebase/firebase';
import './index.scss';
import 'font-awesome/css/font-awesome.min.css';
import { configureStore } from './store/configureStore';
import { startSetMessages } from './actions/messages';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
store.dispatch(startSetMessages());

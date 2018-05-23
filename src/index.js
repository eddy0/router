import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/main'
import middleware from './middleware'



ReactDOM.render(
        <Provider store={createStore(reducer, middleware)}>
                <App />
        </Provider>,
    document.getElementById('root'));

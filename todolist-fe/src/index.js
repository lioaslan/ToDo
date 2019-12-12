import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers'
import * as serviceWorker from './serviceWorker';

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store = {store}>
        <Login />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

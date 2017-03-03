import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './src/reducers/index';
import routes from './src/routes';


/*
Here we are getting the initial state injected by the server. See routes/index.js for more details
 */
const initialState = window.__INITIAL_STATE__;

/*
While creating a store, we will inject the initial state we received from the server to our app.
 */
ReactDOM.render(
    <Provider store={createStore(reducers, initialState)}>
        <Router history={ browserHistory } routes={ routes } />
    </Provider>,
    document.getElementById("reactbody")
);

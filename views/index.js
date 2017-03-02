import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './src/reducers/index';
import routes from './src/routes';

const initialState = window.__INITIAL_STATE__;

ReactDOM.render(
    <Provider store={createStore(reducers, initialState)}>
        <Router history={ browserHistory } routes={ routes } />
    </Provider>,
    document.getElementById("reactbody")
);

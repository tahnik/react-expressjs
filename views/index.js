import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory, match } from 'react-router';
import Main from './src/components/main';
import reducers from './src/reducers/index';
import routes from './src/routes';


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Router history={ browserHistory } routes={ routes } />
    </Provider>,
    document.getElementById("reactbody")
);

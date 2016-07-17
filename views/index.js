import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Main from './src/components/main';
import reducers from './src/reducers/index';


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Main />
    </Provider>,
    document.getElementById("reactbody")
);

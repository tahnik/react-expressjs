import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ViewItem from './containers/show_list_item';

import Header from './components/header';
import Main from './components/main';

export default (
    <Router history={ browserHistory } >
        <Route path="/" component={Header}>
            <IndexRoute component={Main} />
            <Route path="view/:name" component={ViewItem} />
        </Route>
    </Router>
)

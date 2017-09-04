import React from 'react';
import ViewItem from './containers/show_list_item';
import Header from './components/header';
import Main from './components/main';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
    <Route exact path="/" component={Main} />
    <Route path="/view/:name" component={ViewItem} />
  </div>
);

export default App;
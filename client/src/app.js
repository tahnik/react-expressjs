import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';

const App = () => (
  <div>
    <Header />
    <Route exact path="/" component={Home} />
  </div>
);

export default App;

// TODO sækja og setja upp react router

import React from 'react';
//import { Layout } from './components/layout/Layout';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { render } from 'react-dom';


import { Index } from './pages/Index';
import { NewsPage } from './pages/News';
import { NotFound } from './pages/NotFound';


export default function App() {

  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/news" component={NewsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
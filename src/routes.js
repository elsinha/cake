-->/**
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

export default() => (<BrowserRouter>
  <Switch>
    <Route path="/" exact="exact" component={App}/>
    <Route path="/about" exact="exact" component={About}/>
    <Route path="/contact" exact="exact" component={Contact}/>
  </Switch>
</BrowserRouter>);
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {
  Icon,
  NavItem,
  Navbar,
} from 'react-materialize';

import App from './App';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

import avatar from './img/avatar.png';


ReactDOM.render(
  <Router>
    <div>
      <Navbar class="black">
        <NavItem><img class="logo-img" src={avatar}alt="cakesorceress"></img></NavItem>
        <NavItem class="right"><NavLink to='/contact'class="lime-text text-darken-1"><Icon right>email</Icon></NavLink>
        </NavItem>
        <NavItem class="right"><NavLink to='/about'class="lime-text text-darken-1"><Icon right>face</Icon></NavLink>
        </NavItem>
        <NavItem class="right"><NavLink to='/'class="lime-text text-darken-1"><Icon right>home</Icon></NavLink>
        </NavItem>
      </Navbar>

      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>,
 document.getElementById('root')
);

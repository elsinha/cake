import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';
import {
  Button,
  Icon,
  NavItem,
  Navbar,
  Media,
  Slider,
  Slide,
  MediaBox
} from 'react-materialize';
import frontDoor from './img/frontdoor.png';
import wacom from './img/desktop-copy.png';
import team from './img/team.png';
import avatar from './img/avatar.png';
import sprite from './img/cake-sprite-animation.gif'
class App extends Component {
  render() {
    return (<body class="mass">
      <div className="App">

        <div class="pageOne">
          <div class="container">
            <div class="row">
              <div class="col s12">
                <MediaBox class="avatar valign-center" src={avatar} caption="Cake Sorceress Game House" width="150"/>
                <Slider class="valign-center">
                  <Slide src={frontDoor} alt="spookyDoor" title="The Reclusion Club Game">
                    <span>Coming Soon!</span>
                  </Slide>
                  <Slide src={wacom} alt="photoshop workflow" title="Illustration and Concept Design" placement="left">
                    <span>Behind the scene</span>
                  </Slide>
                  <Slide src={team} alt="team members photos" title="The team" placement="right">
                    Get to Know the Developers
                  </Slide>
                </Slider>
                        <img class="websprite left" src={sprite}></img>
              </div>
            </div>
          </div>
        </div>

        <footer class="page-footer lime darken-3">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">Rows and columns here to organize footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Follow Us</h5>
                <ul>
                  <li>
                    <a class="grey-text text-lighten-3" href="https://twitter.com/cake_sorceress" target="blank">Twitter</a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="https://www.instagram.com/cakesorceress/" target="blank">Instagram</a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="https://gamejolt.com/@cakesorceress" target="blank">Game Jolt</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright lime darken-4">
            <div class="container">
              © 2018 Copyright CakeSorceress
              <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
      </div>

    </body>);
  }
}

export default App;

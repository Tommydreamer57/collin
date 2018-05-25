import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import all from './assets/all-three.jpg';
import asleep from './assets/asleep.jpg';
import hair from './assets/big-hair.jpg';
import blue from './assets/blue.jpg';
import orange from './assets/orange.jpg';
import yellow from './assets/yellow.jpg';

// const images = [all, asleep, hair, blue, orange, yellow];
const images = [yellow, blue];

function getRandom() {
  return Math.random() * 60 - 30;
}

class App extends Component {
  static log(data) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      axios.post('/api/console', data).then(console.log).catch(console.log);
    }
    return data;
  }
  constructor() {
    super();
    this.state = {
      yellow: getRandom(),
      blue: getRandom()
    };
    this.resetYellow = this.resetYellow.bind(this);
    this.resetBlue = this.resetBlue.bind(this);
  }
  componentDidMount() {
    this.resetYellow();
    this.resetBlue();
  }
  resetYellow() {
    this.setState({
      yellow: getRandom(),
    });
    setTimeout(this.resetYellow, Math.random() * 500);
  }
  resetBlue() {
    this.setState({
      blue: getRandom()
    });
    setTimeout(this.resetBlue, Math.random() * 500);
  }
  render() {
    return (
      <div className="App" >
        <img src={blue} style={{ transform: `rotate(${this.state.blue}deg)` }} />
        <p>
          good job collin
        </p>
        <img src={yellow} style={{ transform: `rotate(${this.state.yellow}deg)` }} />
      </div>
    );
  }
}

export default App;

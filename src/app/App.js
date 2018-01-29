import React, { Component } from 'react';
import TopBar from '../parts/top-bar/TopBar';
import Home from '../pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Home />
      </div>
    );
  }
}

export default App;

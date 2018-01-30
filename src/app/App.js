import React, { Component } from 'react';
import TopBar from '../parts/top-bar/TopBar';
import Home from '../pages/Home';
import reviews from '../dummyData/reviews';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__overlay"></div>
        <TopBar />
        <Home reviews={reviews}/>
      </div>
    );
  }
}

export default App;

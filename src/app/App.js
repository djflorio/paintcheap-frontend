import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from '../parts/top-bar/TopBar';
import Home from '../pages/Home';
import Paintings from '../pages/Paintings';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App__overlay"></div>
          <TopBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/paintings' component={Paintings} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

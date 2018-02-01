import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBarContainer from '../parts/top-bar/TopBarContainer';
import Home from '../pages/Home';
import Paintings from '../pages/Paintings';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App__overlay"></div>
          <TopBarContainer />
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

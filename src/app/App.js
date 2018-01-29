import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-bar">
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </div>
    );
  }
}

export default App;

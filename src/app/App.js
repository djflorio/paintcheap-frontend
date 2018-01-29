import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-bar">
          <FontAwesomeIcon className="top-bar__cart" icon={faShoppingCart} />
        </div>
        <section className="hero">
        
        </section>
      </div>
    );
  }
}

export default App;

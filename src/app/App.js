import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-bar">
          <a className="top-bar__cart">
            <FontAwesomeIcon className="top-bar__cart-icon" icon={faShoppingCart} />
            CART (0)
          </a>
        </div>
        <section className="hero">
          <div className="hero__overlay"></div>
          <div className='hero__intro'>
            <h1 className="hero__title">
              paintcheap
            </h1>
            <p className="hero__text">
              We put art in the hands of those who need it most.
            </p>
            <a className="hero__button">
              FIND A PAINTING
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

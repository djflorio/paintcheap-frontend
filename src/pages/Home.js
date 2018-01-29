import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
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
    );
  }
}

export default Home;
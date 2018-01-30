import React from 'react';
import ReviewsContainer from '../parts/reviews/ReviewsContainer';
import './Home.css';

const Home = (props) => {
  return (
    <section className="home">
      <div className="home__intro">
        <h1 className="home__title">
          paintcheap
        </h1>
        <p className="home__text">
          We put art in the hands of those who need it most.
        </p>
        <a className="home__button">
          FIND A PAINTING
        </a>
      </div>
      <ReviewsContainer />
    </section>
  );
}

export default Home;
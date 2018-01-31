import React from 'react';
import ReviewsContainer from '../parts/reviews/ReviewsContainer';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = (props) => {
  return (
    <section className="home">
      <div className="home__intro">
        <h1 className="home__title">
          PaintCheap
        </h1>
        <p className="home__text">
          Original masterpieces at reasonable prices.
        </p>
        <NavLink className="home__button" to='/paintings'>
          FIND A PAINTING
        </NavLink>
      </div>
      <ReviewsContainer />
    </section>
  );
}

export default Home;
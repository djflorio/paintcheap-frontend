import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';
import { faStarHalf } from '@fortawesome/fontawesome-free-solid';
import Slider from 'react-slick';
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
      <Slider autoplay={true} autoplaySpeed={5000} arrows={false} className="home__quotes">
        {
          props.reviews.map(review => 
            <div key={review.id} className="home__quotes-item">
              <span className="home__quotes-rating">
              {
                review.rating.map((rating, i) => {
                  if (rating === 0.5) {
                    return <FontAwesomeIcon key={i} icon={faStarHalf} />
                  }
                  return <FontAwesomeIcon key={i} icon={faStar} />
                })
              }
              </span>
              <p className="home__quotes-text">
                <i>"{review.text}"</i>
                <br/>
                <span className="home__quotes-name">- {review.name}</span>
              </p>
            </div>
          )
        }
      </Slider>
    </section>
  );
}

export default Home;
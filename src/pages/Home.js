import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';
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
        <ul className="home__quotes">
          {
            this.props.reviews.map((review) => {
              return (
              <li key={review.id} className="home__quotes-item">
                <p className="home__quotes-text">
                  <i>{review.text}</i>
                  <br/>
                  {review.name}
                </p>
                <span className="home__quotes-rating">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </li>
              );
            })
          }
        </ul>
      </section>
    );
  }
}

export default Home;
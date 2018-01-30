import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';
import { faStarHalf } from '@fortawesome/fontawesome-free-solid';
import Slider from 'react-slick';
import './Home.css';

class Home extends Component {

  render() {
    return (
      <section className="hero">
        <div className="hero__overlay"></div>
        <div className="home__center">
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
        <Slider autoplay={true} autoplaySpeed={5000} arrows={false} className="home__quotes">
          {
            this.props.reviews.map(review => 
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
        </div>
      </section>
    );
  }
}

export default Home;
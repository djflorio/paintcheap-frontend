import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';
import { faStarHalf } from '@fortawesome/fontawesome-free-solid';
import Slider from 'react-slick';
import './Reviews.css';

const Reviews = (props) => {
  return (
    <Slider autoplay={true} autoplaySpeed={5000} arrows={false} className="reviews">
      {
        props.reviews.map(review => 
          <div key={review.id} className="review">
            <span className="review__rating">
            {
              review.rating.map((rating, i) => {
                if (rating === 0.5) {
                  return <FontAwesomeIcon key={i} icon={faStarHalf} />
                }
                return <FontAwesomeIcon key={i} icon={faStar} />
              })
            }
            </span>
            <p className="review__text">
              <i>"{review.text}"</i>
              <br/>
              <span className="review__name">- {review.name}</span>
            </p>
          </div>
        )
      }
    </Slider>
  );
}

export default Reviews;
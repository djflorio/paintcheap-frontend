import React, { Component } from 'react';
import Reviews from './Reviews';
import reviewsDummy from '../../dummyData/reviews';

class ReviewsContainer extends Component {
  render() {
    return (
      <Reviews reviews={reviewsDummy} />
    );
  }
}

export default ReviewsContainer;
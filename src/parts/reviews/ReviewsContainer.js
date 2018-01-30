import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reviews from './Reviews';

import { fetchReviews } from "./ReviewsActions";

class ReviewsContainer extends Component {
  componentWillMount() {
    this.props.dispatch(fetchReviews());
  }
  render() {
    console.log("PROPS:");
    console.log(this.props);
    return (
      <Reviews reviews={this.props.reviews} />
    );
  }
}

function mapStateToProps(store) {
  return {
    reviews: store.reviews.reviews
  }
}

export default connect(mapStateToProps)(ReviewsContainer);
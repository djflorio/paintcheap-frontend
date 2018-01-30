import {
  FETCH_REVIEWS_FULFILLED
} from './ReviewsActions';

const reviews = (state={reviews: []}, action) => {
  switch(action.type) {
    case FETCH_REVIEWS_FULFILLED: {
      return Object.assign({}, state, {
        reviews: action.payload
      });
    }
    default:
      return state;
  }
}

export default reviews;
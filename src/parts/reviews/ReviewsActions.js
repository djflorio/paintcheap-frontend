import dummyReviews from '../../dummyData/reviews';

export const FETCH_REVIEWS_FULFILLED = 'FETCH_REVIEWS_FULFILLED';

// TODO: Replace with api call and handle errors.
export const fetchReviews = () => ({
  type: FETCH_REVIEWS_FULFILLED,
  payload: dummyReviews
});
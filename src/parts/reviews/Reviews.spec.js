import reducer from './ReviewsReducer';
import reviews from '../../dummyData/reviews';
import {
  FETCH_REVIEWS_FULFILLED
} from './ReviewsActions';

describe('Reviews Reducer', () => {

  it('returns default state for unrecognized action', () => {
    expect(reducer(undefined, { type: 'unexpected' })).toEqual({
      reviews: []
    });
  });
  
  it('returns reviews when fetch is fulfilled', () => {
    expect(reducer(undefined, { 
      type: FETCH_REVIEWS_FULFILLED,
      payload: reviews
    })).toEqual({ reviews });
  });
  
});
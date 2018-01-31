import reducer from './PaintingGridReducer';
import paintings from '../../dummyData/paintings';
import {
  FETCH_PAINTINGS_FULFILLED
} from './PaintingGridActions';

describe('PaintingGrid Reducer', () => {

  it('returns default state for unrecognized action', () => {
    expect(reducer(undefined, { type: 'unexpected' })).toEqual({
      paintings: []
    });
  });
  
  it('returns paintings when fetch is fulfilled', () => {
    expect(reducer(undefined, { 
      type: FETCH_PAINTINGS_FULFILLED,
      payload: paintings
    })).toEqual({ paintings });
  });
  
});
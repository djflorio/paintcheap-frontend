import reducer from './PaintingGridReducer';
import paintings from '../../dummyData/paintings';
import * as actions from './PaintingGridActions';

describe('PaintingGrid', () => {

  it('should create an action to indicate successful fetch', () => {
    const expectedAction = {
      type: actions.FETCH_PAINTINGS_FULFILLED,
      payload: paintings
    }
    expect(actions.fetchPaintings()).toEqual(expectedAction);
  });

  it('should return default state for unrecognized action', () => {
    expect(reducer(undefined, { type: 'unexpected' })).toEqual({
      paintings: []
    });
  });
  
  it('should return paintings when fetch is fulfilled', () => {
    expect(reducer(undefined, actions.fetchPaintings())).toEqual({ paintings });
  });
  
});
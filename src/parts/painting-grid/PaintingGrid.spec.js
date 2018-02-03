import reducer from './PaintingGridReducer';
import paintings from '../../dummyData/paintings';
import * as actions from './PaintingGridActions';
import { addToOrRemoveFromCart } from '../cart/CartActions';

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

  it('should set inCart to true if false with addToOrRemoveFromCart', () => {
    const paintings2 = paintings.slice();
    paintings2[1] = Object.assign({}, paintings2[1], {
      inCart: true
    });
    expect(reducer(
      {paintings: paintings},
      addToOrRemoveFromCart(paintings[1]))
    ).toEqual({paintings: paintings2});
  });

  it('should set inCart to false if true with addToOrRemoveFromCart', () => {
    const paintings2 = paintings.slice();
    paintings2[1] = Object.assign({}, paintings2[1], {
      inCart: true
    });
    expect(reducer(
      {paintings: paintings2},
      addToOrRemoveFromCart(paintings[1]))
    ).toEqual({paintings: paintings});
  });
  
});
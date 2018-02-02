import reducer from './CartReducer';
import { addToCart, removeFromCart } from '../painting-grid/PaintingGridActions';

describe('Cart', () => {

  it('should add item to empty cart with addToCart', () => {
    const painting = {
      id: 1,
      name: "painting",
      price: 50
    }
    const result = {
      cart: [
        painting
      ]
    }
    expect(reducer(undefined, addToCart(painting))).toEqual(result);
  });

  it('should return default state for unrecognized action', () => {
    expect(reducer(undefined, { type: 'unexpected' })).toEqual({
      cart: []
    })
  });

});
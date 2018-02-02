import reducer from './CartReducer';
import * as actions from './CartActions';

describe('Cart', () => {

  it('should create an action to add painting to cart', () => {
    const painting = {
      id: 1,
      name: "painting",
      price: 50
    }
    const expectedAction = {
      type: actions.ADD_TO_CART,
      painting: painting
    }
    expect(actions.addToCart(painting)).toEqual(expectedAction);
  });

  it('should create an action to remove painting from cart', () => {
    const expectedAction = {
      type: actions.REMOVE_FROM_CART,
      paintingId: 1
    }
    expect(actions.removeFromCart(1)).toEqual(expectedAction);
  });

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
    expect(reducer(undefined, actions.addToCart(painting))).toEqual(result);
  });

  it('should not add duplite item to cart with addToCart', () => {
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
    expect(reducer({cart: [painting]}, actions.addToCart(painting))).toEqual(result);
  });

  it('should return default state for unrecognized action', () => {
    expect(reducer(undefined, { type: 'unexpected' })).toEqual({
      cart: []
    })
  });

});
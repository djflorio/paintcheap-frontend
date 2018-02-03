import reducer from './CartReducer';
import * as actions from './CartActions';

describe('Cart', () => {

  it('should create an action to add/remove painting to/from cart', () => {
    const painting = {
      id: 1,
      name: "painting",
      price: 50
    }
    const expectedAction = {
      type: actions.ADD_TO_OR_REMOVE_FROM_CART,
      painting: painting
    }
    expect(actions.addToOrRemoveFromCart(painting)).toEqual(expectedAction);
  });

  it('should create an action to open/close cart', () => {
    expect(actions.toggleCart()).toEqual({
      type: actions.TOGGLE_CART
    });
  });

  it('should set cartOpen to true if false with toggleCart', () => {
    expect(reducer(undefined, actions.toggleCart())).toEqual({
      cart: [],
      cartOpen: true
    });
  });

  it('should set cartOpen to false if true with toggleCart', () => {
    expect(reducer({cart: [], cartOpen: true}, actions.toggleCart())).toEqual({
      cart: [],
      cartOpen: false
    });
  });

  it('should add item to empty cart with addToOrRemoveFromCart', () => {
    const painting = {
      id: 1,
      name: "painting",
      price: 50
    }
    const result = {
      cart: [painting],
      cartOpen: false
    }
    expect(reducer(undefined, actions.addToOrRemoveFromCart(painting))).toEqual(result);
  });

  it('should add item to occupied cart with addToOrRemoveFromCart', () => {
    const painting1 = {
      id: 1,
      name: "painting",
      price: 50
    }
    const painting2 = {
      id: 2,
      name: "painting2",
      price: 50
    }
    const result = {
      cart: [
        painting1,
        painting2
      ],
      cartOpen: false
    }
    expect(reducer(
      {cart: [painting1], cartOpen: false},
      actions.addToOrRemoveFromCart(painting2))
    ).toEqual(result);
  });

  it('should remove item from cart if already there with addToOrRemoveFromCart', () => {
    const painting = {
      id: 1,
      name: "painting",
      price: 50
    }
    const result = {
      cart: [],
      cartOpen: false
    }
    expect(
      reducer(
        {cart: [painting], cartOpen: false},
        actions.addToOrRemoveFromCart(painting))
      ).toEqual(result);
  });

  it('should return default state for unrecognized action', () => {
    expect(reducer(undefined, { type: 'unexpected' })).toEqual({
      cart: [],
      cartOpen: false
    })
  });

});
import { ADD_TO_CART, REMOVE_FROM_CART } from '../painting-grid/PaintingGridActions';

const cart = (state={cart: []}, action) => {
  switch(action.type) {
    case ADD_TO_CART: {
      const newCart = state.cart.slice();
      newCart.push(action.painting);

      return Object.assign({}, state, {
        cart: newCart
      });
    }
    default: {
      return state;
    }
  }
}

export default cart;
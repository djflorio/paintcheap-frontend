import { ADD_TO_CART, REMOVE_FROM_CART } from './CartActions';

const cart = (state={cart: []}, action) => {
  switch(action.type) {
    case ADD_TO_CART: {

      for (var i=0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.painting.id) {
          return state;
        }
      }

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
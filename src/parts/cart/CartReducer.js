import {
  ADD_TO_OR_REMOVE_FROM_CART, TOGGLE_CART
} from './CartActions';

const defaultState = {
  cart: [],
  cartOpen: false
}

const cart = (state=defaultState, action) => {
  switch(action.type) {
    case ADD_TO_OR_REMOVE_FROM_CART: {

      let inCart = false;
      let index;
      const newCart = state.cart.slice();

      for (var i=0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.painting.id) {
          inCart = true;
          index = i;
          break;
        }
      }

      if (!inCart) {
        newCart.push(action.painting);
      } else {
        newCart.splice(index,1);
      }

      return Object.assign({}, state, {
        cart: newCart
      });
    }
    case TOGGLE_CART: {
      return Object.assign({}, state, {
        cartOpen: !state.cartOpen
      });
    }
    default: {
      return state;
    }
  }
}

export default cart;
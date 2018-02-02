import { ADD_TO_OR_REMOVE_FROM_CART } from './CartActions';

const cart = (state={cart: []}, action) => {
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
    default: {
      return state;
    }
  }
}

export default cart;
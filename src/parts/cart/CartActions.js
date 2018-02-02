export const ADD_TO_OR_REMOVE_FROM_CART = 'ADD_TO_OR_REMOVE_FROM_CART';

export const addToOrRemoveFromCart = (painting) => ({
  type: ADD_TO_OR_REMOVE_FROM_CART,
  painting: painting
});
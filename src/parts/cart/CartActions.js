export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVED_FROM_CART';

export const addToCart = (painting) => ({
  type: ADD_TO_CART,
  painting: painting
});

export const removeFromCart = (paintingId) => ({
  type: REMOVE_FROM_CART,
  paintingId: paintingId
});
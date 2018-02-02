import dummyPaintings from '../../dummyData/paintings';

export const FETCH_PAINTINGS_FULFILLED = 'FETCH_PAINTINGS_FULFILLED';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVED_FROM_CART';

// TODO: Replace with api call and handle errors.
export const fetchPaintings = () => ({
  type: FETCH_PAINTINGS_FULFILLED,
  payload: dummyPaintings
});

export const addToCart = (painting) => ({
  type: ADD_TO_CART,
  painting: painting
});

export const removeFromCart = (paintingId) => ({
  type: REMOVE_FROM_CART,
  paintingId: paintingId
});
import dummyPaintings from '../../dummyData/paintings';

export const FETCH_PAINTINGS_FULFILLED = 'FETCH_PAINTINGS_FULFILLED';

// TODO: Replace with api call and handle errors.
export const fetchPaintings = () => ({
  type: FETCH_PAINTINGS_FULFILLED,
  payload: dummyPaintings
});
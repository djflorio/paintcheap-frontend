import {
    FETCH_PAINTINGS_FULFILLED
} from './PaintingGridActions';

const paintingGrid = (state={paintings: []}, action) => {
    switch(action.type) {
        case FETCH_PAINTINGS_FULFILLED: {
            return Object.assign({}, state, {
                paintings: action.payload
            });
        }
        default:
            return state;
    }
}

export default paintingGrid;
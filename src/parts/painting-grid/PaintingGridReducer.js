import { FETCH_PAINTINGS_FULFILLED } from './PaintingGridActions';
import { ADD_TO_OR_REMOVE_FROM_CART } from '../cart/CartActions';

const paintingGrid = (state={paintings: []}, action) => {
    switch(action.type) {
        case FETCH_PAINTINGS_FULFILLED: {
            return Object.assign({}, state, {
                paintings: action.payload
            });
        }
        case ADD_TO_OR_REMOVE_FROM_CART: {
            for (let i=0; i < state.paintings.length; i++) {
                if (state.paintings[i].id === action.painting.id) {

                    const newPaintings = state.paintings.slice();
                    newPaintings[i] = Object.assign({}, newPaintings[i], {
                        inCart: !newPaintings[i].inCart
                    });
                    
                    return Object.assign({}, state, {
                        paintings: newPaintings
                    });
                }
            }
            break;
        }
        default:
            return state;
    }
}

export default paintingGrid;
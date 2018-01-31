import reducer from './TopBarReducer';
import {
    setOpacityFalse,
    setOpacityTrue,
    SET_OPACITY_TRUE,
    SET_OPACITY_FALSE
} from './TopBarActions';

const initialState = {
    opacity: false
}

describe('TopBar Actions', () => {
    it('should create an action to set opacity to true', () => {
        const expectedAction = {
            type: SET_OPACITY_TRUE,
            payload: true
        }
        expect(setOpacityTrue()).toEqual(expectedAction);
    });
    it('should create an action to set opacity to false', () => {
        const expectedAction = {
            type: SET_OPACITY_FALSE,
            payload: false
        }
        expect(setOpacityFalse()).toEqual(expectedAction);
    });
});

describe('TopBar Reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, { type: 'unexpected' })).toEqual(initialState);
    });

    it('should handle SET_OPACITY_TRUE', () => {
        expect(reducer(initialState, setOpacityTrue)).toEqual({
            opacity: true
        });
    });

    it('should handle SET_OPACITY_FALSE', () => {
        expect(reducer({opacity: true}, setOpacityFalse)).toEqual({
            opacity: false
        });
    });

});
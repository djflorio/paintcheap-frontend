import reducer from './TopBarReducer';
import * as actions from './TopBarActions';

describe('TopBar', () => {
    it('should create an action to show background', () => {
        const expectedAction = {
            type: actions.SHOW_TOPBAR_BACKGROUND
        }
        expect(actions.showBackground()).toEqual(expectedAction);
    });
    it('should set background state to true with showBackground', () => {
        const result = reducer(
            { backgroundVisible: false },
            actions.showBackground()
        );
        expect(result).toEqual({
            backgroundVisible: true
        });
    });
    it('should create an action to hide background', () => {
        const expectedAction = {
            type: actions.HIDE_TOPBAR_BACKGROUND
        }
        expect(actions.hideBackground()).toEqual(expectedAction);
    });
    it('should set background state to false with hideBackground', () => {
        const result = reducer(
            { backgroundVisible: true },
            actions.hideBackground()
        );
        expect(result).toEqual({
            backgroundVisible: false
        });
    });
    it('should use default background state with unrecognized action', () => {
        const result = reducer(
            { backgroundVisible: true },
            "unrecognized"
        );
        expect(result).toEqual({
            backgroundVisible: true
        });
    });
});
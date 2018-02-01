import * as actions from './TopBarActions';

const topBar = (state={backgroundVisible: false}, action) => {
    switch(action.type) {
        case actions.SHOW_TOPBAR_BACKGROUND: {
            return Object.assign({}, state, {
                backgroundVisible: true
            });
        }
        case actions.HIDE_TOPBAR_BACKGROUND: {
            return Object.assign({}, state, {
                backgroundVisible: false
            });
        }
        default: {
            return state;
        }
    }
}

export default topBar;
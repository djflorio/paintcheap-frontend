export const SET_OPACITY_FALSE = "SET_OPACITY_FALSE";
export const SET_OPACITY_TRUE = "SET_OPACITY_TRUE";

export const setOpacityFalse = () => ({
    type: SET_OPACITY_FALSE,
    payload: false
});

export const setOpacityTrue = () => ({
    type: SET_OPACITY_TRUE,
    payload: true
});
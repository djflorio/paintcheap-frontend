import { applyMiddleware, createStore } from "redux";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware"

import reducer from "./app/reducers";

// Set the middleware, which is just stuff that happens in the middle
// of all redux operations. Promise allows us to use promises, thunk
// allows us to perform multiple dispatches asynchronously, and logger
// simply logs helpful information to the console.
// const middleware = applyMiddleware(promise(), thunk, createLogger());
const middleware = applyMiddleware(promise(), thunk);

export default createStore(reducer, middleware);
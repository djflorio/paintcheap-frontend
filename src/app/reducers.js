import { combineReducers } from "redux";

import reviews from "../parts/reviews/ReviewsReducer";
import paintingGrid from "../parts/painting-grid/PaintingGridReducer";

export default combineReducers({
  reviews,
  paintingGrid
});
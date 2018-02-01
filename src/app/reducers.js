import { combineReducers } from "redux";

import reviews from "../parts/reviews/ReviewsReducer";
import paintingGrid from "../parts/painting-grid/PaintingGridReducer";
import topBar from "../parts/top-bar/TopBarReducer";

export default combineReducers({
  reviews,
  paintingGrid,
  topBar
});
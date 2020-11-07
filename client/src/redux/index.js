import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { viewerReducer } from "../pages";

export default combineReducers({
  form: formReducer,
  viewer: viewerReducer,
});

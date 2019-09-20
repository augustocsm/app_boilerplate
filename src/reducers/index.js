import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducers";

export default combineReducers({
  form: formReducer,
  apps: appReducer
});

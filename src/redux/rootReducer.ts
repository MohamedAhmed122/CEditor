import { combineReducers } from "redux";
import packageReducer from "./packages/reducer";

const rootReducer = combineReducers({
  packages: packageReducer,
});

export default rootReducer;

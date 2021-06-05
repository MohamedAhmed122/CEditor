import { combineReducers } from "redux";
import packageReducer from "./packages/reducer";

const rootReducer = combineReducers({
  packages: packageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

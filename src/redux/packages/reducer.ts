import { Action, ActionType } from "./types";

interface PackageState {
  error: string | null;
  data: string[];
  loading: boolean;
}

const initState = {
  error: null,
  data: [],
  loading: false,
};

const packageReducer = (state: PackageState = initState, action: Action): PackageState => {
  switch (action.type) {
    case ActionType.SEARCH_PACKAGE_REQUEST:
      return {
        data: [],
        error: null,
        loading: true,
      };
    case ActionType.SEARCH_PACKAGE_SUCCESS:
      return {
        data: action.payload,
        error: null,
        loading: false,
      };
    case ActionType.SEARCH_PACKAGE_ERROR:
      return {
        data: [],
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default packageReducer;

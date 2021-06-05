import axios from "axios";
import { Dispatch } from "redux";
import { Action, ActionType } from "./types";

const searchPackage = (term: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.SEARCH_PACKAGE_REQUEST });
  try {
    const { data } = await axios.get(`http://registry.npmjs.org/-/v1/search`, {
      params: {
        text: term,
      },
    });

    const names = data.objects.map((res: any) => {
      return res.package.name;
    });
    dispatch({ type: ActionType.SEARCH_PACKAGE_SUCCESS, payload: names });
  } catch (error) {
    dispatch({ type: ActionType.SEARCH_PACKAGE_ERROR, payload: error.message });
  }
};

export default searchPackage;

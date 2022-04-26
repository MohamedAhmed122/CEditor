import { Action, ActionTypes } from "./types";

interface State {
  counter: number;
}
const initialState: State = {
  counter: 0,
};

export const counterReducer = (state: State = initialState, action: Action) : State=> {
  switch (action.type) {
    case ActionTypes.INCREMENT_ACTION:
      return {
        counter: state.counter + 1,
      };
    case ActionTypes.DECREMENT_ACTION:
      return {
        counter: state.counter - 1,
      };
    case ActionTypes.INCREMENT_BY_NUMBER_ACTION:
      return {
        counter: state.counter + action.payload,
      };

    default:
      return state;
  }
};

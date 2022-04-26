import { ActionTypes, Action } from "./types";

export const increment = (): Action => {
  return { type: ActionTypes.INCREMENT_ACTION };
};

export const decrement = (): Action => {
  return { type: ActionTypes.INCREMENT_ACTION };
};

export const incrementByNumber = (value: number): Action => {
  return { type: ActionTypes.INCREMENT_BY_NUMBER_ACTION, payload: value };
};

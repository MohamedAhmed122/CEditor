// type interface enum

export enum ActionTypes {
  INCREMENT_ACTION = "INCREMENT_ACTION",
  DECREMENT_ACTION = "DECREMENT_ACTION",
  INCREMENT_BY_NUMBER_ACTION = "INCREMENT_BY_NUMBER_ACTION",
}

 type IncrementType = {
  type: ActionTypes.INCREMENT_ACTION;
};

type DecrementType = {
  type: ActionTypes.DECREMENT_ACTION;
};

type IncrementByNumberType = {
    type: ActionTypes.INCREMENT_BY_NUMBER_ACTION;
    payload: number
};
  
export type Action = IncrementType | DecrementType | IncrementByNumberType
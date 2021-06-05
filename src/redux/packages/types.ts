export enum ActionType {
  SEARCH_PACKAGE_REQUEST = "SEARCH_PACKAGE_REQUEST",
  SEARCH_PACKAGE_ERROR = "SEARCH_PACKAGE_ERROR",
  SEARCH_PACKAGE_SUCCESS = "SEARCH_PACKAGE_SUCCESS",
}
interface SearchReq {
  type: ActionType.SEARCH_PACKAGE_REQUEST;
}
interface SearchSuccess {
  type: ActionType.SEARCH_PACKAGE_SUCCESS;
  payload: string[];
}
interface SearchError {
  type: ActionType.SEARCH_PACKAGE_ERROR;
  payload: string;
}
export type Action = SearchReq | SearchSuccess | SearchError;

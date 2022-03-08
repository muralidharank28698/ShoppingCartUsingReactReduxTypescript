import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../action/index";

export const products = (item: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PRODUCT_ITEM,
      payload: item,
    });
  };
};

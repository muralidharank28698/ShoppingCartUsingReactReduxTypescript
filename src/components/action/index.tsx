// import { ActionType } from "../shopping/action-types";
import { ActionType } from "../action-types";
interface productItemAction {
  type: ActionType.PRODUCT_ITEM;
  payload: any;
}

export type Action = productItemAction;

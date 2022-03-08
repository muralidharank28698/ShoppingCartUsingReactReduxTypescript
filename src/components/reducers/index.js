import { combineReducers } from "redux";
import Shopreducer from "./ShoppingReducer";

const RootReducer = combineReducers({
  shop: Shopreducer,
});

export default RootReducer;

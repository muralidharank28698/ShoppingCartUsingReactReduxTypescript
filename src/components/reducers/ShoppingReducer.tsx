// import { PRODUCT_ITEM } from "./ShoppingTypes";
// import { ADD_TO_CART } from "./ShoppingTypes";
// import { REMOVE_FROM_CART } from "./ShoppingTypes";
// import { ADJUST_QTY } from "./ShoppingTypes";
// import { LOAD_CURRENT_ITEM } from "./ShoppingTypes";

// import vivo from "../../../assets/cartImage/vivo.png";
// import { type } from "os";
// import oppo from "../../../assets/cartImage/oppo.png";
// import redmi from "../../../assets/cartImage/redmi.png";
// import poco from "../../../assets/cartImage/poco.png";
// import { act } from "react-dom/test-utils";

import { Action } from "../action/index";
import { ActionType } from "../action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Vivo S1",
      des: "Vivo S1 (Skyline Blue, 4GB RAM, 128GB Storage)",
      price: "14,899",
      // image: vivo,
      Memory: "1000 GB",
    },
  ],
};

// type Action = {
//   type: any;
//   payload?: any;
// };

const Shopreducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.PRODUCT_ITEM:
      return {
        ...state,
        products: state.products,
      };
    default:
      return state;
  }
};
export default Shopreducer;

import { LOAD_PRODUCTS } from "../action";

export const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      filter_products: action.payload,
      all_products: action.payload,
    };
  }
  return state;
};

import * as type from "./constants";

const initialState = {
  list: [],
  isFetching: false,
  error: "",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PRODUCTS_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case type.GET_PRODUCTS_FULFILLED:
      return {
        ...state,
        list: action.payload,
        isFetching: false,
      };
    case type.GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default productsReducer;

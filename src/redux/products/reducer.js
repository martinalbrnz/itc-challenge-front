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
    case type.CREATE_PRODUCT_PENDING:
      return {
        ...state,
        isFetching: true,
      }
    case type.CREATE_PRODUCT_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload],
        isFetching: false,
      }
    case type.CREATE_PRODUCT_ERROR:
      return {
        ...state,
        error: Selection.payload,
        isFetching: false,
      }
    default:
      return state;
  }
};

export default productsReducer;

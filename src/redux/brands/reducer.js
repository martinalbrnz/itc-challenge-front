import * as type from "./constants";

const initialState = {
  list: [],
  isFetching: false,
  error: "",
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_BRANDS_PENDING: 
      return {
        ...state,
        isFetching: true,
      };
    case type.GET_BRANDS_FULFILLED:
      return {
        ...state,
        list: action.payload,
        isFetching: false,
      };
    case type.GET_BRANDS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default brandsReducer;

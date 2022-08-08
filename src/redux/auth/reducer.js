import * as type from "./constants";

const initialState = {
  auth: {},
  isFetching: false,
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case type.LOGIN_FULFILLED:
      return {
        ...state,
        auth: action.payload,
        isFetching: false,
      };
    case type.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case type.LOGOUT:
      return {
        ...state,
        auth: {},
      };
    default:
      return state;
  }
};

export default authReducer;

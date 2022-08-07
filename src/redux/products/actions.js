import * as type from "./constants";

export const getProductsPending = () => ({
  type: type.GET_PRODUCTS_PENDING,
});

export const getProductsFulfilled = (list) => ({
  type: type.GET_PRODUCTS_FULFILLED,
  payload: list,
});

export const getProductsError = (error) => ({
  type: type.GET_PRODUCTS_ERROR,
  payload: error,
});

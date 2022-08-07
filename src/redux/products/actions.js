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

export const createProductPending = () => ({
  type: type.CREATE_PRODUCT_PENDING,
});

export const createProductFulfilled = (list) => ({
  type: type.CREATE_PRODUCT_FULFILLED,
  payload: list,
});

export const createProductError = (error) => ({
  type: type.CREATE_PRODUCT_ERROR,
  payload: error,
});

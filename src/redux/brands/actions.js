import * as type from "./constants";

export const getBrandsPending = () => ({
  type: type.GET_BRANDS_PENDING,
});

export const getBrandsFulfilled = (list) => ({
  type: type.GET_BRANDS_FULFILLED,
  payload: list,
});

export const getBrandsError = (error) => ({
  type: type.GET_BRANDS_ERROR,
  payload: error,
});

import * as type from "./constants";

export const loginPending = () => ({
  type: type.LOGIN_PENDING,
});

export const loginFulfilled = (token) => ({
  type: type.LOGIN_FULFILLED,
  payload: token,
});

export const loginFailed = (error) => ({
  type: type.LOGIN_ERROR,
  payload: error,
});

export const logout = () => ({
  type: type.LOGOUT,
})

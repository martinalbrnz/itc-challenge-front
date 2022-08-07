import * as action from "./actions";

export const getProducts = () => (dispatch) => {
  dispatch(action.getProductsPending());
  fetch(`${process.env.REACT_APP_SERVER_URL}/products`)
    .then((response) => response.json())
    .then((json) => {
      if (!json.error) {
        dispatch(action.getProductsFulfilled(json.data));
      }
    })
    .catch((error) => {
      dispatch(action.getProductsError(error));
    });
};

export const createProduct = () => (dispatch) => {
  dispatch(action.createProductPending());
  fetch(`${process.env.REACT_APP_SERVER_URL}/products`, { method: "POST" })
    .then((response) => response.json())
    .then((json) => {
      if (!json.error) {
        dispatch(action.createProductFulfilled(json.data));
      }
    })
    .catch((error) => {
      dispatch(action.createProductError(error));
    });
};

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

export const createProduct = (data) => (dispatch) => {
  dispatch(action.createProductPending());
  fetch(`${process.env.REACT_APP_SERVER_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
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

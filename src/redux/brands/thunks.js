import * as action from "./actions";

export const getBrands = () => (dispatch) => {
  dispatch(action.getBrandsPending());
  fetch(`${process.env.REACT_APP_SERVER_URL}/brands`)
    .then((response) => response.json())
    .then((json) => {
      if (!json.error) {
        dispatch(action.getBrandsFulfilled(json.data));
      }
    })
    .catch((error) => {
      dispatch(action.getBrandsError(error));
    });
};

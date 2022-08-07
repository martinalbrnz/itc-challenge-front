import * as action from "./actions";

export const getArticles = () => (dispatch) => {
  dispatch(action.getArticlesPending());
  fetch(`${process.env.REACT_APP_SERVER_URL}/articles`)
    .then((response) => response.json())
    .then((json) => {
      if (!json.error) {
        dispatch(action.getArticlesFulfilled(json.data));
      }
    })
    .catch((error) => {
      dispatch(action.getArticlesError(error));
    });
};

import * as type from "./constants";

export const getArticlesPending = () => ({
  type: type.GET_ARTICLES_PENDING,
});

export const getArticlesFulfilled = (list) => ({
  type: type.GET_ARTICLES_PENDING,
  payload: list,
});

export const getArticlesError = (error) => ({
  type: type.GET_ARTICLES_PENDING,
  payload: error,
});

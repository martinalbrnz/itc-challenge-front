import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import articlesReducer from "./articles/reducer";

const rootReducer = combineReducers({
  articles: articlesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  enhacer: composeWithDevTools(applyMiddleware(thunk)),
});

export default store;

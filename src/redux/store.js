import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productsReducer from "./products/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  enhacer: composeWithDevTools(applyMiddleware(thunk)),
});

export default store;

import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productsReducer from "./products/reducer";
import brandsReducer from "./brands/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  brands: brandsReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  enhacer: composeWithDevTools(applyMiddleware(thunk)),
});

export default store;

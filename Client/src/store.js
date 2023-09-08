import { combineReducers } from "redux";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllGroceriesReducers } from "./Reducers/GroceryReducer";
import { CartReducer } from "./Reducers/CartReducer";
import { signupUsersReducer, signinUsersReducer } from "./Reducers/UserReducer";
import { placeOrderReducer, getUserOrdersReducers } from "./Reducers/OrderReducer";

const finalReducer = combineReducers({
  getAllGroceriesReducers: getAllGroceriesReducers,
  CartReducer: CartReducer,
  signupUsersReducer: signupUsersReducer,
  signinUsersReducer: signinUsersReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducers: getUserOrdersReducers,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const initialState = {
  CartReducer: {
    cartItems: cartItems,
  },
  signinUsersReducer: {
    currentUser: currentUser,
  },
};
const composeEnhancers = composeWithDevTools({});
const store = legacy_createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
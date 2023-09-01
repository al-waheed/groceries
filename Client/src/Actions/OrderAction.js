import axios from "axios";

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().signinUsersReducer.currentUser;
  const cartItems = getState().CartReducer.cartItems;

  // Convert subTotal to cents and round it
  const subTotalInCents = Math.round(subTotal * 100);

  try {
    const response = await axios.post("/api/orders/placeorder", {
      token,
      subTotal: subTotalInCents,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(response);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });
  const currentUser = getState().signinUsersReducer.currentUser;

  try {
    const response = await axios.post('/api/orders/getuserorders', {userid: currentUser._id});
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};


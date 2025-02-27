import axios from "axios";

export const getAllGroceries = () => async (dispatch) => {
  dispatch({ type: "GET_GROCERIES_REQUEST" });
  try {
    const response = await axios.get("api/grocery/getallgroceries");
    dispatch({ type: "GET_GROCERIES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_GROCERIES_FAILED", payload: error });
  }
};

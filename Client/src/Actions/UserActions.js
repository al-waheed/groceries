import axios from "axios";

export const signupUsers = (formData) => async (dispatch) => {
  dispatch({ type: "SIGNUP_USERS_REQUEST" });
  try {
    await axios.post("/api/users/signup", formData);
    dispatch({ type: "SIGNUP_USERS_SUCCESS" });
  } catch (error) {
    dispatch({ type: "SIGNUP_USERS_FAILED", payload: error });
  }
};

export const signinUsers = (formData) => async (dispatch) => {
  dispatch({ type: "SIGNIN_USERS_REQUEST" });
  try {
    const response = await axios.post("/api/users/signin", formData);
    dispatch({ type: "SIGNIN_USERS_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "SIGNIN_USERS_FAILED", payload: error });
  }
};

export const logOutUser = () => () => {
  localStorage.removeItem("currentUser");
  window.location.href = "/signin";
};

export const signupUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP_USERS_REQUEST":
      return {
        loading: true,
      };
    case "SIGNUP_USERS_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "SIGNUP_USERS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const signinUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNIN_USERS_REQUEST":
      return {
        loading: true,
      };
    case "SIGNIN_USERS_SUCCESS":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "SIGNIN_USERS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

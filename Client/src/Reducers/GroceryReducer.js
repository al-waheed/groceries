const getAllGroceriesReducers = (state = { grocery: [] }, action) => {
  switch (action.type) {
    case "GET_GROCERIES_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_GROCERIES_SUCCESS":
      return {
        loading: false,
        grocery: action.payload,
      };
    case "GET_GROCERIES_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default getAllGroceriesReducers;

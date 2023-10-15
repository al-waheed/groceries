// export const placeOrderReducer = (state = {}, action) => {
//   switch (action.type) {
//     case "PLACE_ORDER_REQUEST":
//       return {
//         loading: true,
//       };
//     case "PLACE_ORDER_SUCCESS":
//       return {
//         loading: false,
//         success: true,
//       };
//     case "PLACE_ORDER_FAILED": 
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "PLACE_ORDER_REQUEST":
      return {
        loading: true,
        success: false, // Reset success flag on request
        error: null, // Reset error on request
      };
    case "PLACE_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
        error: null, // Reset error on success
      };
    case "PLACE_ORDER_FAILED":
      return {
        loading: false,
        success: false, // Reset success flag on failure
        error: action.payload, // Capture the error message
      };
    default:
      return state;
  }
};


export const getUserOrdersReducers = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "GET_USER_ORDERS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_USER_ORDERS_SUCCESS":
      return {
        loading: false,
        orders: action.payload,
      };
    case "GET_USER_ORDERS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const searchItemReducer = (state = { searchItem: "" }, action) => {
  switch (action.type) {
    case "ITEM_SEARCH_QUERY":
      return {
        ...state,
        searchItem: action.payload,
      };
    default:
      return state;
  }
};

export default searchItemReducer;

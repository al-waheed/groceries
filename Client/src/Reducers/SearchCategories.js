const searchCategoryReducer = (state = { selectedCategory: "ALL" }, action) => {
	switch (action.type) {
	  case "ITEM_SEARCH_CATEGORY":
		return {
		  ...state,
		  selectedCategory: action.payload,
		};
	  default:
		return state;
	}
  };
  
  export default searchCategoryReducer;
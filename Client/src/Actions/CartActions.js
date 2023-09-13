export const addToCart =
  (items, quantity, varients) => (dispatch, getState) => {
    var cartItem = {
      _id: items._id,
      name: items.name,
      category: items.category,
      varients: varients,
      quantity: Number(quantity),
      prices: items.prices,
      price: items.prices[0][varients] * quantity,
      images: items.images,
      features: items.features,
    };
    if (cartItem.quantity > 10) {
      alert("You cannot add more than 10 quantities");
    } else {
      if (cartItem.quantity < 1) {
        dispatch({ type: "DELETE_FROM_CART", payload: items });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
      }
    }

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

export const deleteCartItems = (items) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: items });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: "CLEAR_CART" });
  localStorage.removeItem("cartItems");
};

export const setSearchQuery = (query) => (dispatch) => {
  dispatch({ type: "SET_SEARCH_QUERY", payload: query });
};

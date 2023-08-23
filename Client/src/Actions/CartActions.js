export const addToCart =
  (items, quantity, varients) => (dispatch, getState) => {
    var cartItem = {
      _id: items._id,
      name: items.name,
      category: items.category,
      varients: varients,
      quantity: quantity,
      prices: items.prices,
      price: items.prices[0][varients] * quantity,
      images: items.images,
      features: items.features,
    };
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
    const cartItems = getState().CartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

export const deleteCartItems = (items) => (dispatch) => {
  dispatch({ type: "DELETE_FROM_CART", payload: items });
};

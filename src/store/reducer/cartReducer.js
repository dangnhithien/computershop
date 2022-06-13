const inintCart = { cart: [] };
const CartReducer = (state = inintCart, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return;
    case GET_NUMBER_CART:
      return;
    case ADD_CART:
      return;
    case DELETE_CART:
      return;
    default:
      return state;
  }
};

export default CartReducer;

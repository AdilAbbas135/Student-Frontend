import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    // quantity: [],
    total: 0,
    cart_quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.cart_quantity = state.cart_quantity + 1;
      state.products.push({
        product_detail: action.payload.product,
        product_quantity: action.payload.quantity,
        product_subtotal: action.payload.subtotal,
      });
      state.total = state.total + action.payload.subtotal;
    },
    deleteProduct: (state, action) => {
      console.log("i am going to delete the product");
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;

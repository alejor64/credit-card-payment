import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const ProductSlice = createSlice({
  name: 'productsSelected',
  initialState,
  reducers: {
    addProduct: (state, {payload}) => {
      state = state.push(payload);
    }
  }
});

export const {addProduct, removeProduct} = ProductSlice.actions;
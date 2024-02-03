import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const ProductSlice = createSlice({
  name: 'productsSelected',
  initialState,
  reducers: {
    addProduct: (state, {payload}) => {
      state = state.push(payload);
    },
    removeProduct: (state, {payload}) => {
      state = state.filter(itm => itm?.slug !== payload.slug);
    }
  }
});

export const {addProduct, removeProduct} = ProductSlice.actions;
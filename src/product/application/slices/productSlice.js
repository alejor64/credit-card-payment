import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: [],
};

export const ProductSlice = createSlice({
  name: 'productsSelected',
  initialState,
  reducers: {
    addProduct: (state, {payload}) => {
      state.selected = [...state.selected, payload];
    },
    removeProduct: (state, {payload}) => {
      state.selected = state.selected.filter(product => product.id === payload.id)
    },
    setProducts: (state, {payload}) => {
      state.selected = [...payload];
    }
  }
});

export const {addProduct, removeProduct, setProducts} = ProductSlice.actions;
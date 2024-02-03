import { createSelector } from "@reduxjs/toolkit";

const productsState = (state) => state.products;

export const selectProducts = createSelector(productsState, state => state)
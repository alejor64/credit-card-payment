import { createSelector } from "@reduxjs/toolkit";

const productsSelectedState = (state) => state.productsSelected;

export const selectedProducts = createSelector(productsSelectedState, (state) => state.selected);
import { createSelector } from "@reduxjs/toolkit";

const paymentState = (state) => state.products;

export const selectFormData = createSelector(paymentState, state => state);
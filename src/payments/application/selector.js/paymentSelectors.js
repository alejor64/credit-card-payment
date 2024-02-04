import { createSelector } from "@reduxjs/toolkit";

const paymentState = (state) => state.formData;

export const selectFormData = createSelector(paymentState, state => state.formData);
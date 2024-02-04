import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
};

export const PaymentSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFormaData: (state, {payload}) => {
      state.formData = payload;
    }
  }
});

export const {setFormaData} = PaymentSlice.actions;
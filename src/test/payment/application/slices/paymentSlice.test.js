import { PaymentSlice, setFormaData } from "../../../../payments/application/slices/paymenthSlice";
import { formData, initialState } from "../../../fixtures/paymentFixture";

describe('Testing paymentSlice', () => {
  test('Should return initial state and slice name', () => {
    const state = PaymentSlice.reducer(initialState, {})
    expect(PaymentSlice.name).toBe('products');
    expect(state).toEqual(initialState);
  })
  test('Should set formData', () => {
    const state = PaymentSlice.reducer(initialState, setFormaData(formData))
    expect(!!state.formData.userName).toBe(true);
  })
})
import { ProductsSlice } from "../../../../catalog/application/slices/productsSlice";
import { initialState } from "../../../fixtures/catalogFixture";

describe('Testing ProductsSlice', () => {
  test('Should return initial state and slice name', () => {
    const state = ProductsSlice.reducer(initialState, {})
    expect(ProductsSlice.name).toBe('products');
    expect(state).toEqual(initialState);
    expect(state.length).toBe(4);
  })
})
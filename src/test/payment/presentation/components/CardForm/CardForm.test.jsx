import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import CardForm from "../../../../../payments/presentation/components/CardForm/CardForm"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { ProductsSlice } from "../../../../../catalog/application/slices/productsSlice"
import { ProductSlice } from "../../../../../product/application/slices/productSlice"
import { PaymentSlice } from "../../../../../payments/application/slices/paymenthSlice"

const store = configureStore({reducer: {
  products: ProductsSlice.reducer,
  productsSelected: ProductSlice.reducer,
  formData: PaymentSlice.reducer,
}});

describe('Testing <CardForm >', () => {
  test('Should render component', async () => {
    render(
      <Provider store={store}>
        <Router>
          <CardForm />
        </Router>
      </Provider>
    )
    expect(screen.getByText('Card details')).toBeTruthy()
    expect(screen.getByText('Card number')).toBeTruthy()
  })
})
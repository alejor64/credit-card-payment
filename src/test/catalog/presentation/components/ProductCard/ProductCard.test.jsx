import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import ProductCard from "../../../../../catalog/presentation/components/ProductCard/ProductCard"
import { productMocked } from "../../../../fixtures/product"

describe('Testing <ProductCard ?>', () => {
  test('Should render component', async () => {
    render(
      <Router>
        <ProductCard product={productMocked} />
      </Router>
    )
    expect(screen.getByRole('img').src).toBe(productMocked.img)
    expect(screen.getByText(productMocked.description)).toBeTruthy()
  })
})
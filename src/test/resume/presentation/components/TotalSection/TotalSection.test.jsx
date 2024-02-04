import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { productsMocked } from "../../../../fixtures/product"
import TotalSection from "../../../../../resume/presentation/components/TotalSection/TotalSection"

describe('Testing <TotalSection >', () => {
  test('Should render component', async () => {
    render(
      <Router>
        <TotalSection products={productsMocked} />
      </Router>
    )
    expect(screen.getByText('Got to products')).toBeTruthy()
    expect(screen.getByText('Total:')).toBeTruthy()
  })
})
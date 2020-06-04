import React from "react"
import { render } from "@testing-library/react"
import Product from "."

test("render carrier information from <Product /> component", () => {
  const props = {
    product: { cost: 62.98, currency: "sek", lead_time: 2, product: "dhl_1" },
    weather: "rain",
  }
  const { getByAltText, getByTestId } = render(<Product {...props} />)
  const carrierLogo = getByAltText(/-logo/i)
  const carrierName = getByTestId(/carrier/i)
  const carrierCost = getByTestId(/cost/i)
  const carrierTime = getByTestId(/time/i)

  expect(carrierLogo).toBeInTheDocument()
  expect(carrierName).toBeInTheDocument()
  expect(carrierCost).toBeInTheDocument()
  expect(carrierTime).toBeInTheDocument()
})

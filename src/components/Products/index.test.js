import React from "react"
import { render } from "@testing-library/react"
import Products from "."
import getProducts from "../../services/fakeProductService"

test("render <Products /> component", () => {
  const sortParameter = "cheapest"
  const { baseElement } = render(<Products sortParameter={sortParameter} />)

  expect(baseElement).toMatchSnapshot()
})

test("render number of carriers from 'products.json' component", () => {
  const sortParameter = "cheapest"
  const { getAllByTestId } = render(<Products sortParameter={sortParameter} />)
  const products = getAllByTestId(/products/i)

  expect(products.length).toBe(getProducts().items.length)
})

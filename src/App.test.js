import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test("renders <App /> component", () => {
  const { getByText, getByTestId, baseElement } = render(<App />)
  const sortingTitle = getByText(/sort by/i)
  const buttonCheapest = getByTestId(/btn-cheapest/i)
  const buttonFastest = getByTestId(/btn-fastest/i)
  // const columnsProducts = getByTestId(/products/i)

  expect(sortingTitle).toBeInTheDocument()
  expect(buttonCheapest).toBeInTheDocument()
  expect(buttonFastest).toBeInTheDocument()
  expect(baseElement).toMatchSnapshot()
  // expect(columnsProducts).toBeInTheDocument()
})

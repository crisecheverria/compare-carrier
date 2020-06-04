import React from "react"
import { render } from "@testing-library/react"
import Buttons from "."

test("render sorting options from <Buttons /> component", () => {
  function sortByParameter() {}
  const { getAllByTestId, baseElement } = render(
    <Buttons sortBy={sortByParameter} />
  )
  const sortingOptions = getAllByTestId(/sorting-options/i)

  expect(sortingOptions[0].name).toBe("cheapest")
  expect(sortingOptions[1].name).toBe("fastest")
  expect(baseElement).toMatchSnapshot()
})

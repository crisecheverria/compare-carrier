import React, { useState } from "react"
import PropTypes from "prop-types"

function Buttons({ sortBy }) {
  const [selectedOption, setSelectedOption] = useState("")

  function handleClick(e) {
    setSelectedOption(e.target.name)
    sortBy(e.target.name)
  }

  return (
    <h2 className="subtitle">
      <button
        type="button"
        onClick={handleClick}
        name="cheapest"
        className={
          selectedOption === "cheapest" ? "button is-active" : "button is-light"
        }
        data-testid="btn-cheapest"
      >
        Cheapest
      </button>
      <button
        type="button"
        onClick={handleClick}
        name="fastest"
        className={
          selectedOption === "fastest" ? "button is-active" : "button is-light"
        }
        data-testid="btn-fastest"
      >
        Fastest
      </button>
    </h2>
  )
}

Buttons.propTypes = {
  sortBy: PropTypes.func.isRequired,
}

export default Buttons

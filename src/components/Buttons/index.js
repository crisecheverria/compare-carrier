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
      {["cheapest", "fastest"].map((option) => (
        <button
          key={option}
          type="button"
          onClick={handleClick}
          name={option}
          className={
            selectedOption === option ? "button is-active" : "button is-light"
          }
          data-testid="sorting-options"
        >
          {option}
        </button>
      ))}
    </h2>
  )
}

Buttons.propTypes = {
  sortBy: PropTypes.func.isRequired,
}

export default Buttons

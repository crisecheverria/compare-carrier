import React, { useState } from "react"
import PropTypes from "prop-types"

function Buttons({ sortBy }) {
  const [btnClick, setBtnClick] = useState("")

  function handleClick(e) {
    setBtnClick(e.target.name)
    sortBy(e.target.name)
  }

  return (
    <h2 className="subtitle">
      <button
        type="button"
        onClick={handleClick}
        name="cheapest"
        className={btnClick === "cheapest" ? "button is-light" : "button"}
      >
        Cheapest
      </button>
      <button
        type="button"
        onClick={handleClick}
        name="fastest"
        className={btnClick === "fastest" ? "button is-light" : "button"}
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

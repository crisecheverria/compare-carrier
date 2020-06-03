import React, { useState } from "react"
import Buttons from "./components/Buttons"
import Products from "./components/Products"
import "./App.css"

function App() {
  const [parameterState, setParameterState] = useState("")

  function sortByParameter(parameter) {
    setParameterState(parameter)
  }

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h2>
            <strong>Sort by</strong>
          </h2>
          <Buttons sortBy={sortByParameter} />
          <Products sortParameter={parameterState} />
        </div>
      </div>
    </section>
  )
}

export default App

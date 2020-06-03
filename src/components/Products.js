import React, { useState, Fragment } from "react"
import PropTypes from "prop-types"
import getProducts from "../services/fakeProductService"
import splitEvery from "../utils"
import Product from "./Product"

function Products({ sortParameter }) {
  const [products] = useState(getProducts().items)

  function compareCheapest(a, b) {
    if (a.cost > b.cost) return 1
    if (a.cost < b.cost) return -1
    return 0
  }

  function compareFastest(a, b) {
    if (a.lead_time > b.lead_time) return 1
    if (a.lead_time < b.lead_time) return -1
    return 0
  }

  const sortedProducts = [...products]
  if (sortParameter === "cheapest") sortedProducts.sort(compareCheapest)

  if (sortParameter === "fastest") sortedProducts.sort(compareFastest)

  return (
    <Fragment>
      {splitEvery(sortedProducts, 3).map((productsChunk) => (
        <div className="columns is-desktop">
          {productsChunk.map((product) => (
            <div className="column">
              <Product key={product.product} product={product} />
            </div>
          ))}
        </div>
      ))}
    </Fragment>
  )
}

Products.propTypes = {
  sortParameter: PropTypes.string,
}

export default Products

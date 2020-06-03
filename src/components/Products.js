import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import config from "../config.json"
import getProducts from "../services/fakeProductService"
import splitEvery from "../utils"
import Product from "./Product"

function Products({ sortParameter }) {
  const [products] = useState(getProducts().items)
  const [weather, setWeather] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(config.weatherApiUrl + config.appid)
      setWeather(data.weather[0].description)
    }

    fetchData()
  }, [])

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
    <>
      {splitEvery(sortedProducts, 3).map((productsChunk, i) => (
        /* eslint-disable */
        <div key={i} className="columns is-desktop">
          {productsChunk.map((product, i) => (
            <div key={i} className="column">
              <Product
                key={product.product}
                product={product}
                weather={weather}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

Products.propTypes = {
  sortParameter: PropTypes.string.isRequired,
}

export default Products

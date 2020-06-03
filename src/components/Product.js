import React from "react"
import PropTypes from "prop-types"
import { normalizeProductName, normalizeProductImageURL, normalizeProductCost, normalizeProductTime } from "../utils"

function Product({ product }) {
  const { product: name, cost, currency, lead_time } = product
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              className="is-rounded"
              src={`images/${normalizeProductImageURL(name)}`}
              alt="Image"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>{normalizeProductName(name)}</p>
            <p><strong>{normalizeProductCost(cost, currency)}</strong></p>
            <span><strong>{normalizeProductTime(lead_time)}</strong><progress className="progress is-warning" value={lead_time} max="7">75%</progress></span>
          </div>
        </div>
      </article>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object,
}

export default Product

import React from "react"
import PropTypes from "prop-types"
import {
  normalizeProductName,
  normalizeProductImageURL,
  normalizeProductCost,
  normalizeProductTime,
} from "../../utils"

function Product({ product, weather }) {
  const { product: name, cost, lead_time: leadTime } = product

  return (
    <div className="custom-box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              className="is-rounded"
              src={`images/${normalizeProductImageURL(name)}`}
              alt={`${normalizeProductName(name)}-logo`}
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p data-testid="carrier">{normalizeProductName(name)}</p>
            <p data-testid="cost" className="currency">
              <strong>
                {Number.parseFloat(
                  normalizeProductCost(cost, weather, name)
                ).toFixed(2)}
              </strong>
            </p>
            <span>
              <strong data-testid="time">
                {normalizeProductTime(leadTime)}
              </strong>
              <progress
                className="progress is-warning"
                value={leadTime}
                max="7"
              />
            </span>
          </div>
        </div>
      </article>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    cost: PropTypes.number,
    currency: PropTypes.string,
    lead_time: PropTypes.number,
    product: PropTypes.string,
  }).isRequired,
  weather: PropTypes.string.isRequired,
}

export default Product

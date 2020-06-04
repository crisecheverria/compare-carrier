import Decimal from "decimal.js"

const sunny = ["clear sky", "few clouds", "scattered clouds", "broken clouds"]
const raining = ["shower rain", "rain", "thunderstorm"]

export function compareCheapest(a, b) {
  if (a.cost > b.cost) return 1
  if (a.cost < b.cost) return -1
  return 0
}

export function compareFastest(a, b) {
  if (a.lead_time > b.lead_time) return 1
  if (a.lead_time < b.lead_time) return -1
  return 0
}

export function splitEvery(arr, length) {
  return arr.reduce((result, item, index) => {
    if (index % length === 0) result.push([])
    result[Math.floor(index / length)].push(item)
    return result
  }, [])
}

export function normalizeProductName(str) {
  return str.replace(/_/g, " ").toUpperCase()
}

export function normalizeProductImageURL(str) {
  return `${str.slice(0, 3)}.svg`
}

function checkWeatherIncrement(weather, product) {
  const isSunny = sunny.filter((s) => s === weather).length
  const isRaining = raining.filter((r) => r === weather).length
  const carrier = normalizeProductName(product).slice(0, 3)

  let increase = 0
  if (isRaining) {
    increase = 0.05
    if (carrier === "DSV") increase = 0.1
    if (carrier === "UPS") increase = 0.25
    if (carrier === "TNT") increase = -0.3
  }

  if (isSunny) {
    increase = -0.05
    if (carrier === "DSV") increase = -0.5
  }

  return increase
}

export function normalizeProductCost(cost, weather, product) {
  const weatherCostChange = checkWeatherIncrement(weather, product)
  if (weatherCostChange !== 0) {
    const weatherCost = new Decimal(cost).times(weatherCostChange)
    const totalCost = new Decimal(cost).plus(weatherCost)
    return `${totalCost} kr`
  }

  return `${cost} kr`
}

export function normalizeProductTime(time) {
  return time > 1 ? `${time} days` : `${time} day`
}

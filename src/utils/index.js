export default function splitEvery(arr, length) {
  return arr.reduce((result, item, index) => {
    if (index % length === 0) result.push([])
    result[Math.floor(index / length)].push(item)
    return result
  }, [])
}

export function normalizeProductName(str) {
  return str.replace(/_/g, ' ').toUpperCase()
}

export function normalizeProductImageURL(str) {
  return str.slice(0, 3) + ".svg"
}

export function normalizeProductCost(cost, currency) {
  if (currency === "sek") {
    return `${cost} kr`
  }
}

export function normalizeProductTime(time) {
  return time > 1 ? `${time} days` : `${time} day` 
}

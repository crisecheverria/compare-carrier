import {
  compareCheapest,
  compareFastest,
  splitEvery,
  normalizeCarrierName,
  normalizeCarrierImageURL,
  normalizeCarrierCost,
  normalizeCarrierTime,
} from "."

test("return products sort by cheaptes", () => {
  const products = [
    { cost: 134, currency: "sek", lead_time: 1, product: "ups_1" },
    {
      cost: 62.98,
      currency: "sek",
      lead_time: 2,
      product: "dhl_1",
    },
  ]

  const sorted = [
    {
      cost: 62.98,
      currency: "sek",
      lead_time: 2,
      product: "dhl_1",
    },
    { cost: 134, currency: "sek", lead_time: 1, product: "ups_1" },
  ]

  expect(products.sort(compareCheapest)).toStrictEqual(sorted)
})

test("return products sort by fastest", () => {
  const products = [
    {
      cost: 62.98,
      currency: "sek",
      lead_time: 2,
      product: "dhl_1",
    },
    { cost: 134, currency: "sek", lead_time: 1, product: "ups_1" },
  ]

  const sorted = [
    { cost: 134, currency: "sek", lead_time: 1, product: "ups_1" },
    {
      cost: 62.98,
      currency: "sek",
      lead_time: 2,
      product: "dhl_1",
    },
  ]

  expect(products.sort(compareFastest)).toStrictEqual(sorted)
})

test("return chunk of products splited by 2", () => {
  const products = [
    {
      cost: 62.98,
      currency: "sek",
      lead_time: 2,
      product: "dhl_1",
    },
    { cost: 134, currency: "sek", lead_time: 1, product: "ups_1" },
    { cost: 147.23, currency: "sek", lead_time: 2, product: "dhl_2" },

    {
      cost: 416.21,
      currency: "sek",
      lead_time: 1,
      product: "tnt_1",
    },
  ]

  const splited = [
    [
      { cost: 62.98, currency: "sek", lead_time: 2, product: "dhl_1" },
      { cost: 134, currency: "sek", lead_time: 1, product: "ups_1" },
    ],
    [
      { cost: 147.23, currency: "sek", lead_time: 2, product: "dhl_2" },
      { cost: 416.21, currency: "sek", lead_time: 1, product: "tnt_1" },
    ],
  ]

  expect(splitEvery(products, 2)).toStrictEqual(splited)
})

test("return carrier name in uppercase & with space instead of underscore", () => {
  const carrier = "dhl_1"

  expect(normalizeCarrierName(carrier)).toStrictEqual("DHL 1")
})

test("return carrier logo name", () => {
  const carrier = "dhl_1"

  expect(normalizeCarrierImageURL(carrier)).toStrictEqual("dhl.svg")
})

test("return carrier cost in SEK for 'UPS'", () => {
  const weatherCost = "10 kr"
  const weather = "random"
  const carrier = "UPS"
  const cost = 10

  expect(normalizeCarrierCost(cost, weather, carrier)).toStrictEqual(
    weatherCost
  )
})

test("return carrier cost for 'UPS' in 'rain'", () => {
  const weatherCost = "12.5 kr"
  const weather = "rain"
  const carrier = "UPS"
  const cost = 10

  expect(normalizeCarrierCost(cost, weather, carrier)).toStrictEqual(
    weatherCost
  )
})

test("return normalize carrier time", () => {
  const leadTime = 2
  const plural = "2 days"
  const leadTime2 = 1
  const singular = "1 day"

  expect(normalizeCarrierTime(leadTime)).toStrictEqual(plural)
  expect(normalizeCarrierTime(leadTime2)).toStrictEqual(singular)
})

import { getVCityInfo } from "../database.js"

const allCities = getVCityInfo()

for (const cities of allCities) {
  console.log(cities)
} 
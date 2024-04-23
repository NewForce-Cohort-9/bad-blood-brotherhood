import { getVCelebInfo } from "../database.js"

const allCelebs = getVCelebInfo()

for (const celebs of allCelebs) {
  console.log(celebs)
} 
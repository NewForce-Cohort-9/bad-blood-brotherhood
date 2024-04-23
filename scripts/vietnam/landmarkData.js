import { getVLandmarkInfo } from "../database.js"

const allLandmarks = getVLandmarkInfo()

for (const landmarks of allLandmarks) {
  console.log(landmarks)
} 
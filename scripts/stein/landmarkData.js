import { getSteinLandmarks } from "../database.js";

export const steinLandmarkList = () => {
    const steinLandmarks = getSteinLandmarks(); 
    let htmlString = `<div class="steinLandmarkList">`;
    steinLandmarks.forEach(landmark => {
        htmlString += `
            <div class="landmark">
                <h2>${landmark.landmarkName}</h2>
                <p>Fun Fact: ${landmark.landmarkFunFact}</p>
                <p>Image: ${landmark.landmarkImage}</p>
            </div>
        `;
    });
    htmlString += '</div>';
    return htmlString;
}
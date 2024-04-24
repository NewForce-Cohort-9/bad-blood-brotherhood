import { getSteinLandmarks } from "../database.js";

export const steinLandmarkList = () => {
    const steinLandmarks = getSteinLandmarks(); 
    let htmlString = `<div class="steinLandmarkList">`;
    steinLandmarks.forEach(landmark => {
        htmlString += `
            <div class="sLandmark">
                <h2>${landmark.landmarkName}</h2>
                <figure class="sLandmarkImage">
                    <img src="${landmark.landmarkImage}" alt="Image">
                </figure>
                <p>Fun Fact: ${landmark.landmarkFunFact}</p>
            </div>
        `;
    });
    htmlString += '</div>';
    return htmlString;
}

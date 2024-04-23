import { getSteinLandmarks } from "../database.js";

export const steinLandmarkList = () => {
    const steinLandmarks = getSteinLandmarks(); 
    let htmlString = `<div class="steinLandmarkList">`;
    steinLandmarks.forEach(landmark => {
        htmlString += `
            <div class="landmark">
                <h2>${landmark.landmarkName}</h2>
                <figure class="landmarkImage">
                    <img src="${landmark.landmarkImage}" alt="Image">
                </figure>
                <p>Fun Fact: ${landmark.landmarkFunFact}</p>
            </div>
        `;
    });
    htmlString += '</div>';
    return htmlString;
}

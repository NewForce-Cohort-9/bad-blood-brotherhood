import { getGreenlandLandmarks } from "../database.js";

export const greenlandLandmarkList = () => {
    const greenlandLandmarks = getGreenlandLandmarks(); 
    let htmlString = `<div class="greenlandLandmarkList">`;
    greenlandLandmarks.forEach(landmark => {
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
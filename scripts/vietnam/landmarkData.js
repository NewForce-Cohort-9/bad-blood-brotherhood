import { getVietnamLandmarks } from "../database.js";

export const vietnamLandmarkList = () => {
    const vietnamLandmarks = getVietnamLandmarks(); 
    let htmlString = `<div class="vietnamLandmarkList">`;
    vietnamLandmarks.forEach(landmark => {
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
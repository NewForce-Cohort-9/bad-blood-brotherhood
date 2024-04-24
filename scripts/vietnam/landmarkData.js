import { getVietnamLandmarks } from "../database.js";

export const vietnamLandmarkList = () => {
    const vietnamLandmarks = getVietnamLandmarks(); 
    let htmlString = `<div class="vietnamLandmarkList">`;
    vietnamLandmarks.forEach(landmark => {
        htmlString += `
            <div class="landmark">
                <h2>${landmark.landmarkName}</h2>
                <figure class="vlandmarkImage">
                    <img src="${landmark.landmarkImage}" alt="Image">
                </figure>
                <p>Fun Fact: ${landmark.landmarkFunFact}</p>
            </div>
        `;
    });
    htmlString += '</div>';
    return htmlString;
}
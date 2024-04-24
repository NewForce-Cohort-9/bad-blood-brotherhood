import { getVietnamLandmarks } from "../database.js";

export const vietnamLandmarkList = () => {
    const vietnamLandmarks = getVietnamLandmarks(); 
    let htmlString = `<div class="vietnamLandmarkList">`;
    vietnamLandmarks.forEach(landmark => {
        htmlString += `
            <div class="vlandmark">
                <h2>${landmark.landmarkName}</h2>
                <figure class="landmarkImage">
                    <div class="vLImages">
                    <img src="${landmark.landmarkImage}" alt="Image">
                    </div>
                </figure>
                <p>Fun Fact: ${landmark.landmarkFunFact}</p>
            </div>
        `;
    });
    htmlString += '</div>';
    return htmlString;
}
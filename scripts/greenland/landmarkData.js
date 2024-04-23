import { getGreenlandLandmarks } from "../database.js";

export const greenlandLandmarkList = () => {
    const greenlandLandmarks = getGreenlandLandmarks(); 
    let htmlString = `<div class="greenlandLandmarkList">`;
    greenlandLandmarks.forEach(landmark => {
        htmlString += `
            <div class="landmark">
                <h2>${landmark.landmarkName}</h2>
                <figure class="landmarkImage">
                    <img src="${landmark.landmarkImage}" alt="Image">
                </figure>
                <p>Fun Fact: ${landmark.landmarkFunFact}</p>
        `;
    });
    htmlString += '</div>';
    return htmlString;
}

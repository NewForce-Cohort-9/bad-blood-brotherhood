import { getCambodiaLandmarks } from "../database.js";

export const cambodiaLandmarkList = () => {
    const cambodiaLandmarks = getCambodiaLandmarks(); 
    let htmlString = `<div class="cambodiaLandmarkList">`;
    cambodiaLandmarks.forEach(landmark => {
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


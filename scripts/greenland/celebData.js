import { getGreenlandCelebrities } from "../database.js";

export const greenlandCelebrityList = () => {
    const greenlandCelebrities = getGreenlandCelebrities(); 
    let htmlString = '<div class="greenlandCelebrityList">';
    greenlandCelebrities.forEach(celebrity => {
        htmlString += `
            <div class="celebrity">
                <h2>${celebrity.celebName}</h2>
                <p>Quote: ${celebrity.celebQuote}</p>
                <p>Known For: ${celebrity.celebKnownFor}</p>
                <p>Image: ${celebrity.celebImage}</p>
            </div>
        `;
    });
    htmlString += '</div>';
    return htmlString;
}
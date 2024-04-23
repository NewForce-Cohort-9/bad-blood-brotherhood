import { getSteinCelebrities } from "../database.js";

export const steinCelebrityList = () => {
    const steinCelebrities = getSteinCelebrities(); 
    let htmlString = '<div class="steinCelebrityList">';
    steinCelebrities.forEach(celebrity => {
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
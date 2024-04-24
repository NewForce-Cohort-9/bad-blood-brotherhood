import { getSteinCelebrities } from "../database.js";

export const steinCelebrityList = () => {
    const steinCelebrities = getSteinCelebrities(); 
    let htmlString = '<div class="steinCelebrityList">';
    steinCelebrities.forEach(celebrity => {
        htmlString += `
            <div class="sCelebrity">
                <h2>${celebrity.celebName}</h2>
                <figure class="sCelebImage">
                    <img src="${celebrity.celebImage}" alt="Image">
                </figure>
                <p>Quote: ${celebrity.celebQuote}</p>
                <p>Known For: ${celebrity.celebKnownFor}</p>
            </div>
        `;
    });
    htmlString += '</div>';
    return htmlString;
}

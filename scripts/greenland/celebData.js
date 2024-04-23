import { getGreenlandCelebrities } from "../database.js";

export const greenlandCelebrityList = () => {
    const greenlandCelebrities = getGreenlandCelebrities(); 
    let htmlString = '<div class="greenlandCelebrityList">';
    greenlandCelebrities.forEach(celebrity => {
        htmlString += `
            <div class="celebrity">
                <h2>${celebrity.celebName}</h2>
                <figure class="celebImage">
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

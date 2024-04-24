import { getVietnamCelebrities } from "../database.js";

export const vietnamCelebrityList = () => {
    const vietnamCelebrities = getVietnamCelebrities(); 
    let htmlString = '<div class="vietnamCelebrityList">';
    vietnamCelebrities.forEach(celebrity => {
        htmlString += `
            <div class="celebrity">
                <h2>${celebrity.celebName}</h2>
                <figure class="vcelebImage">
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
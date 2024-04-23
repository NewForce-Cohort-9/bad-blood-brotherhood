import { getVietnamCelebrities } from "../database.js";

export const VietnamCelebrityList = () => {
    const vietnamCelebrities = getVietnamCelebrities(); 
    let htmlString = '<div class="vietnamCelebrityList">';
    vietnamCelebrities.forEach(celebrity => {
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
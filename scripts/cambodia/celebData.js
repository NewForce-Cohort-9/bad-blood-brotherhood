import { getCambodiaCelebrities } from "../database.js";

export const cambodiaCelebrityList = () => {
    const cambodiaCelebrities = getCambodiaCelebrities(); 
    let htmlString = '<div class="cambodiaCelebrityList">';
    cambodiaCelebrities.forEach(celebrity => {
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
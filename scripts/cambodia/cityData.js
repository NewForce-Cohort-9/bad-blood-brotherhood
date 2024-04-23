import { getCambodiaCities } from "../database.js";

export const cambodiaCityList = () => {
    const cambodiaCities = getCambodiaCities(); 
    let htmlString = '<div class="cambodiaCityList">';
    cambodiaCities.forEach(city => {
        htmlString += `
            <div class="city">
                <h2>${city.cityName}</h2>
                <p>Population: ${city.cityPopulation}</p>
                <p>Founded: ${city.cityFounded}</p>
                <p>Image: ${city.cityImage}</p>
            </div>
        `;
    });
    htmlString += '</div>';
    return htmlString;
}
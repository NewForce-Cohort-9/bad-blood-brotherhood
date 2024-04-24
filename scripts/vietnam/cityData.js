import { getVietnamCities } from "../database.js";

export const vietnamCityList = () => {
    const vietnamCities = getVietnamCities(); 
    let htmlString = '<div class="vietnamCityList">';
    vietnamCities.forEach(city => {
        htmlString += `
            <div class="vcity">
                <h2>${city.cityName}</h2>
                <figure class="cityImage">
                <div class="vCImages">
                    <img src="${city.cityImage}" alt="Image">
                </div>
                </figure>
                <p>Population: ${city.cityPopulation}</p>
                <p>Founded: ${city.cityFounded}</p>
            </div>
        `;
    });
    htmlString += '</div>';
    return htmlString;
}
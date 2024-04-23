import { getVietnamCities } from "../database.js";

export const vietnamCityList = () => {
    const vietnamCities = getVietnamCities(); 
    let htmlString = '<div class="vietnamCityList">';
    vietnamCities.forEach(city => {
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
import { getSteinCities } from "../database.js";

export const steinCityList = () => {
    const steinCities = getSteinCities(); 
    let htmlString = '<div class="SteinCityList">';
    steinCities.forEach(city => {
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
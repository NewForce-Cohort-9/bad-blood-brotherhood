import { getGreenlandCities } from "../database.js";

export const greenlandCityList = () => {
    const greenlandCities = getGreenlandCities(); 
    let htmlString = '<div class="greenlandCityList">';
    greenlandCities.forEach(city => {
        htmlString += `
            <div class="city">
                <h2>City Name${city.cityName}</p>
                <p>Population: ${city.cityPopulation}</p>
                <p>Founded: ${city.cityFounded}</p>
                <p>Image: ${city.cityImage}</p>
            </div>
        `;
    });
    htmlString += '</div>';
    return htmlString;
}
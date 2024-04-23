import { getGreenlandCities } from "../database.js";

export const greenlandCityList = () => {
    const greenlandCities = getGreenlandCities(); 
    let htmlString = '<div class="greenlandCityList">';
    greenlandCities.forEach(city => {
        htmlString += `
            <div class="city">
                <h2>${city.cityName}</h2>
                <figure class="cityImage">
                    <img src="${city.cityImage}" alt="Image">
                </figure>
                <p>Population: ${city.cityPopulation}</p>
                <p>Founded: ${city.cityFounded}</p>
                </div>
        `;
    });
    htmlString += '</div>';
    return htmlString;
}

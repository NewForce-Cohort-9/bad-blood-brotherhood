//cities
import { greenlandCityList } from './cityData.js';


const greenlandCityContainer = document.getElementById('greenlandCityContainer');


greenlandCityContainer.innerHTML = greenlandCityList();

//landmarks

import { greenlandLandmarkList } from './landmarkData.js';

const greenlandLandmarkContainer = document.getElementById('greenlandLandmarkContainer');

greenlandLandmarkContainer.innerHTML = greenlandLandmarkList();

//celebrities

import { greenlandCelebrityList } from './celebData.js';

const greenlandCelebrityContainer = document.getElementById('greenlandCelebrityContainer');

greenlandCelebrityContainer.innerHTML = greenlandCelebrityList();
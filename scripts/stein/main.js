//cities
import { steinCityList } from './cityData.js';


const steinCityContainer = document.getElementById('steinCityContainer');


steinCityContainer.innerHTML = steinCityList();

//landmarks

import { steinLandmarkList } from './landmarkData.js';

const steinLandmarkContainer = document.getElementById('steinLandmarkContainer');

steinLandmarkContainer.innerHTML = steinLandmarkList();

//celebrities

import { steinCelebrityList } from './celebData.js';

const steinCelebrityContainer = document.getElementById('steinCelebrityContainer');

steinCelebrityContainer.innerHTML = steinCelebrityList();
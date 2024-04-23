//cities
import { steinCityList } from './cityData.js';


const steinCityContainer = document.getElementById('stein__cityContainer');


steinCityContainer.innerHTML = steinCityList();

//landmarks

import { steinLandmarkList } from './landmarkData.js';

const steinLandmarkContainer = document.getElementById('stein__landmarkContainer');

steinLandmarkContainer.innerHTML = steinLandmarkList();

//celebrities

import { steinCelebrityList } from './celebData.js';

const steinCelebrityContainer = document.getElementById('stein__celebContainer');

steinCelebrityContainer.innerHTML = steinCelebrityList();
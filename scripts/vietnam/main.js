//cities
import { vietnamCityList } from './cityData.js';


const vietnamCityContainer = document.getElementById('vietnamCityContainer');


vietnamCityContainer.innerHTML = vietnamCityList();

//landmarks

import { vietnamLandmarkList } from './landmarkData.js';

const vietnamLandmarkContainer = document.getElementById('vietnamLandmarkContainer');

vietnamLandmarkContainer.innerHTML = vietnamLandmarkList();

//celebrities

import { vietnamCelebrityList } from './celebData.js';

const vietnamCelebrityContainer = document.getElementById('vietnamCelebrityContainer');

vietnamCelebrityContainer.innerHTML = vietnamCelebrityList();
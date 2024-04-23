//cities
import { cambodiaCityList } from './cityData.js';


const cambodiaCityContainer = document.getElementById('cambodiaCityContainer');


cambodiaCityContainer.innerHTML = cambodiaCityList();

//landmarks

import { cambodiaLandmarkList } from './landmarkData.js';

const cambodiaLandmarkContainer = document.getElementById('cambodiaLandmarkContainer');

cambodiaLandmarkContainer.innerHTML = cambodiaLandmarkList();

//celebrities

import { cambodiaCelebrityList } from './celebData.js';

const cambodiaCelebrityContainer = document.getElementById('cambodiaCelebrityContainer');

cambodiaCelebrityContainer.innerHTML = cambodiaCelebrityList();
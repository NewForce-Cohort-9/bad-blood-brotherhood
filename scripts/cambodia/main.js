//cities
import { cambodiaCityList } from './cityData.js';


const cambodiaCityContainer = document.getElementById('cambodiaCityContainer');


cambodiaCityContainer.innerHTML = cambodiaCityList();

//landmarks

import { cambodiaLandmarkList } from './landmarkData.js';

const cambodiaLandmarkContainer = document.getElementById('cambodiaLandmarkContainer');

cambodiaLandmarkContainer.innerHTML = cambodiaLandmarkList();
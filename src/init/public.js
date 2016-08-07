//this file is not required thought app but only by webpack, it go to /public/build.js
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { routes } from '../controllers/routes';

render(
    <Router routes={ routes } history={ browserHistory } />
), document.getElementById('app');

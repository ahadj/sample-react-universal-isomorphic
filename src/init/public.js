//this file is not required thought app but only by webpack, it go in /public/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { routes } from '../controllers/routes';

ReactDOM.render(
    <Router routes={ routes } history={ browserHistory } />,
    document.getElementById('app')
)

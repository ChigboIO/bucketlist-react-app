import React from 'react';
import ReactDOM from 'react-dom';

// React-Tap-Event-Plugin - Needed for onTouchTap. Can go away in "react 1.0"
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import AppRouter from './js/config/routes';

var appDiv = document.getElementById('app');

ReactDOM.render(AppRouter, appDiv);

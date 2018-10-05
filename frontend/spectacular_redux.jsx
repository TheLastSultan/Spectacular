import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TESTING IMPORTS
import {fetchSpectacle, fetchSpectacles} from './actions/spectacle_action';
import {recieveSpectacle, recieveSpectacles} from './actions/spectacle_action';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    // TESTING
    window.fetchSpectacles = fetchSpectacles
    window.fetchSpectacle = fetchSpectacle

    const root = document.getElementById('root');

    // TESTING
    window.store = store 

    ReactDOM.render(<Root store={store} />, root);
  });
  
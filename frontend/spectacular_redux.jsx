import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TESTING IMPORTS
import {fetchSpectacle, fetchSpectacles} from './actions/spectacle_action';
import {recieveSpectacle, recieveSpectacles} from './actions/spectacle_action';
import {login, logout, signUp} from './actions/session_actions'; 

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    
    let preloadedState = undefined; 
    if (window.currentUser) {
        preloadedState = {
          session: {
            currentUser: window.currentUser
          }
        };
      }
      const store = createStore(preloadedState);
    
    
      // TESTING
    window.fetchSpectacles = fetchSpectacles
    window.fetchSpectacle = fetchSpectacle
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.store = store 
    window.signUp = signUp;
    window.login = login;
    window.logout = logout;
    window.meezo = {user: {email: 'meezomeezo', password: 'password', username:'meezomeezo' }};

    ReactDOM.render(<Root store={store} />, root);
});

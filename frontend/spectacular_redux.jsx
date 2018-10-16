import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TESTING IMPORTS
import {fetchSpectacle, fetchSpectacles} from './actions/spectacle_action';
import {fetchCart} from './util/cart_api_util'
import {recieveSpectacle, recieveSpectacles} from './actions/spectacle_action';
import {login, logout, signUp} from './actions/session_actions'; 
import {fetchCartItems, deleteCartItem, removeCartItem, receiveCartItems, sendCartItem} from './actions/cart_actions';

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
    
    const store = configureStore(preloadedState);
    


    
      // TESTING
    // window.fetchSpectacles = fetchSpectacles
    // window.fetchSpectacle = fetchSpectacle
    // window.dispatch = store.dispatch;
    // window.getState = store.getState;
    // window.store = store 
    // window.signUp = signUp;
    // window.login = login;
    // window.logout = logout;
    // window.meezo = {user: {email: 'meezomeezo', password: 'password', username:'meezomeezo' }};
    // window.cartitem = {cartitem: {spectacle_id: 4 , user_id: 1}}
    // @cartitem = Cartitem.where(spectacle_id: params[:cartitem][:spectacle_id]).find_by(user_id: params[:cartitem][:user_id])

    // Cart Testing
    // window.fetchCartItems = fetchCartItems
    // window.deleteCartItem = deleteCartItem
    // window.fetchCart = fetchCart
    // window.removeCartItem = removeCartItem
    // window.receiveCartItems = receiveCartItems
    // window.sendCartItem = sendCartItem


    ReactDOM.render(<Root store={store} />, root);
});

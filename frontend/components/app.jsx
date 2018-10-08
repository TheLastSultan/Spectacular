import React from 'react';
import SpectacleIndexContainer from './spectacles/spectacles_index_container';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './sidecomponents/navbar';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faShoppingCart)

const App = () => (
  <div className="app">
    <HashRouter> 
      <div> 
        <Route  path="/" component={Navbar}/> 
        <Route exact path="/" component={SpectacleIndexContainer}/>
      </div> 
    </HashRouter> 
  </div>
);

export default App;

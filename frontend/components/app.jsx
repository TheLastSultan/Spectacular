import React from 'react';
import SpectacleIndexContainer from './spectacles/spectacles_index_container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import SignupContainer from './session/sign_up_container';
import LogInContainer from './session/login_container';
import Navbar from './sidecomponents/navbar';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import SpectacleDetailContainer from './spectacles/spectacle_detail_container';

library.add(faSearch, faShoppingCart)

const App = () => (
  <div className="app">
    <HashRouter> 
      <div> 
        <Route  path="/" component={Navbar}/> 
        <Route exact path="/login" component={LogInContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Switch>
          <Route exact path="/" component={SpectacleIndexContainer}/>
          <Route path="/spectacles/:spectacleId" component={SpectacleDetailContainer}/>
        </Switch> 
      </div> 
    </HashRouter> 
  </div>
);

export default App;

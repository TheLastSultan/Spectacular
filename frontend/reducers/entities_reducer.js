import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import spectacleReducer from './spectacle_reducer';

export default combineReducers({
  user: usersReducer,
  spectacles: spectacleReducer
});

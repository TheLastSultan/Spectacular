import {combineReducers} from 'redux';
import spectacleReducer from './spectacle_reducer';

export default combineReducers({
  spectacles: spectacleReducer
});

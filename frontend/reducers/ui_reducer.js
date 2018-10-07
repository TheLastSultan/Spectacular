import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import loading from './loading_reducer';

export default combineReducers({
  loading
});

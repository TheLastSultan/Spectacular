import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionsReducer from './sessions_reducer';


export default combineReducers({
    entities: entitiesReducer,
    sessions: sessionsReducer
});

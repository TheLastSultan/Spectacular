import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionsReducer from './sessions_root_reducer';
import uiReducer from './ui_reducer';


export default combineReducers({
    entities: entitiesReducer,
    session: sessionsReducer,
    ui: uiReducer,
});

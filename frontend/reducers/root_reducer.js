import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionsReducer from './sessions_reducer';
import usersReducer from './users_reducer';
import uiReducer from './ui_reducer';


export default combineReducers({
    entities: entitiesReducer,
    session: sessionsReducer,
    ui: uiReducer,
    user: usersReducer
});

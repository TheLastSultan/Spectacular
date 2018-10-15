import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionsReducer from './sessions_root_reducer';
import uiReducer from './ui_reducer';
import sessionErrors from './session_errors_reducer';
import cartReducer from './cart_reducer';


export default combineReducers({
    entities: entitiesReducer,
    session: sessionsReducer,
    ui: uiReducer,
    sessionErrors: sessionErrors,
    cart: cartReducer 
});




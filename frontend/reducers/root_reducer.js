import { combineReducers } from 'redux';

import entities from './entities_reducer'; // NEED TO IMPLEMENT
import ui from './ui_reducer'; // NEED TO IMPLEMENT
import session from './session_reducer'; // NEED TO IMPLEMENT
import errors from './errors_reducer'; // NEED TO IMPLEMENT

const rootReducer = combineReducers({
  entities,
  session,
  ui,
  errors,
});

export default rootReducer;
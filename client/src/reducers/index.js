import { combineReducers } from 'redux';
import list from './list';

const rootReducer = combineReducers({
  list, // shorthand for lists: lists
});

export default rootReducer;

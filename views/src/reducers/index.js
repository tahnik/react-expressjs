import { combineReducers } from 'redux';
import Lists from './lists';

const rootReducer = combineReducers({
    lists: Lists
});

export default rootReducer;

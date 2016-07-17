import { combineReducers } from 'redux';
import ListItems from './list_items';
import ListItemActive from './list_item_active';

const rootReducer = combineReducers({
    lists: ListItems,
    activeItem: ListItemActive
})

export default rootReducer;

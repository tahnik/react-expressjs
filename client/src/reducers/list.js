import LIST_ITEMS from '../consts/list_items';
import { LIST_ACTIONS } from '../consts/action_types';
import { LISTS } from '../consts/default_state';

export default (state = LISTS, action) => {
  switch (action.type) {
    case LIST_ACTIONS.ITEM_PREVIEW:
      return { ...state, itemPreview: LIST_ITEMS[action.name] };
    case LIST_ACTIONS.ITEM_VIEW:
      return { ...state, itemView: LIST_ITEMS[action.name] };
    case LIST_ACTIONS.ITEM_CLEAR:
      return { ...state, itemView: null };
    case LIST_ACTIONS.ITEM_ADD: {
      const nextItems = { ...state.items };
      const itemToAdd = action.item;
      nextItems[itemToAdd.name.toUpperCase()] = itemToAdd;
      return { ...state, items: nextItems };
    }
    default:
      return state;
  }
};

import { LIST_ACTIONS } from '../consts/action_types';
import { LISTS } from '../consts/default_state';

export default (state = LISTS, action) => {
  switch (action.type) {
    case LIST_ACTIONS.ITEM_PREVIEW:
      return { ...state, itemPreview: state.items[action.name.toUpperCase()] };
    case LIST_ACTIONS.ITEM_VIEW:
      return { ...state, itemView: state.items[action.name.toUpperCase()] };
    case LIST_ACTIONS.ITEM_CLEAR:
      return { ...state, itemView: null };
    case LIST_ACTIONS.ITEM_ADD: {
      const nextItems = { ...state.items };
      const itemToAdd = action.item;
      nextItems[itemToAdd.name.toUpperCase()] = itemToAdd;
      const returnVal = { ...state, items: nextItems };
      return returnVal;
    }
    default:
      return state;
  }
};

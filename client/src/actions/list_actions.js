import { LIST_ACTIONS } from '../consts/action_types';

export const previewItem = name => ({
  type: LIST_ACTIONS.ITEM_PREVIEW,
  name, // shorthand for name: name
});

export const viewItem = name => ({
  type: LIST_ACTIONS.ITEM_VIEW,
  name,
});

export const addItem = item => ({
  type: LIST_ACTIONS.ITEM_ADD,
  item, // shorthand for item: item
});

export const clearItem = () => ({
  type: LIST_ACTIONS.ITEM_CLEAR,
});

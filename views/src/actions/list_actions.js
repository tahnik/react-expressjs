export const ITEM_CLICKED = 'ITEM_CLICKED';
export const ITEM_VIEW = 'ITEM_VIEW';
export const ADD_ITEM = 'ADD_ITEM';


export function selectItem(listItem) {
    return {
        type: ITEM_CLICKED,
        payload: listItem
    };
}

export function getListItem(id) {
    return{
        type: ITEM_VIEW,
        payload: id
    };
}

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    };
}

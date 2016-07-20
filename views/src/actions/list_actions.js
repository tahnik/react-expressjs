export function selectItem(listItem) {
    return {
        type: 'ITEM_CLICKED',
        payload: listItem
    };
}

export function getListItem(id) {
    return{
        type: 'ITEM_VIEW',
        payload: id
    };
}

export function selectItem(listItem) {
    return {
        type: 'ITEM_SELECTED',
        payload: listItem
    };
}

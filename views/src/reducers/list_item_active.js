export default function(state = null, action) {
    switch(action.type) {
        case 'ITEM_SELECTED':
            return action.payload;
    }
    return state;
}

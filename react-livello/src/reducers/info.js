export function wearList(state = [], action) {
    switch (action.type) {
        case 'INFO_FETCH_SUCCESS':
            return action.wear;
        default:
            return state;
    }
}
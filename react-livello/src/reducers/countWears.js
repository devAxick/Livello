export function countWears(state = [], action){
    switch (action.type) {
        case 'RECEIVED_WEARS_COUNT':
            return action.count;
        default:
            return state;
    }
}
export default function userInfo(state = [], action) {
    console.log(action.payload)
    switch (action.type) {
        case 'INFO_FETCH_ACCESS':
            return action.payload;
        default:
            return state;
    }
}
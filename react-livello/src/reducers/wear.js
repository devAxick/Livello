export default function wear(state = [], action) {
    switch (action.type) {
        case "ACCESS": return [...state, action.payload];
        default: return state
    }
}
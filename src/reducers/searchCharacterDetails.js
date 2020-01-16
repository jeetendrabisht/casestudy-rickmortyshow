export function searchCharacter(state = false, action) {
    switch (action.type) {
        case 'SEARCH_STORE_DATA':
            return action.payload;
        default:
            return state;
    }
}
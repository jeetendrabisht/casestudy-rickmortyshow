let initialStore = {
    filterArray : []
}

export function filterArrayItems(state = false, action) {
    switch (action.type) {
        case 'SELECTED_FILTER':
            return [...initialStore.filterArray, action.payload];
        default:
            return state;
    }
}
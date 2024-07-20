import { createStore } from 'redux';

// Initial state
const initialState = {
    cartCount: 0
};

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                cartCount: state.cartCount + 1
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartCount: state.cartCount > 0 ? state.cartCount - 1 : 0
            };
        default:
            return state;
    }
};

// Create store
const store = createStore(reducer);

export default store;


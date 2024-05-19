import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cardItems: []
    },
    reducers: {
        addCountryToCard: (state, action) => {
            state.cardItems.push(action.payload)
        },

        removeCountryFromList: (state) => {
            // Todo
        },

        clearCart: (state) => {
            state.cardItems.length = 0;
        }
    }
});

export const { addCountryToCard, removeCountryFromList, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
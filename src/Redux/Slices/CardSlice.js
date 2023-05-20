import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice(
    {
        name: "card",
        initialState: { card: [] },
        reducers: {
            addToCard: (state, action) => {
                state.card.push(action.payload)
            },
            removeFromCard: (state, action) => { },

        }
    }
);
export const { addToCard, removeFromCard } = cardSlice.actions;
export function selectCard(state) {
    return state.shoppingCardReducer.card;
}
export default cardSlice.reducer;
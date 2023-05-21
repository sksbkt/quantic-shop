import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice(
    {
        name: "card",
        initialState: { card: [] },
        reducers: {
            addToCard: (state, action) => {
                if (state.card.find(item => item.shoe_id === action.payload.shoe_id)) {
                    state.card.map((item, index, array) => {
                        if (item.shoe_id === action.payload.shoe_id)
                            item.count += 1;
                        return item;
                    });
                } else {
                    state.card.push(action.payload);
                }
            },
            setCount: (state, action) => {

                state.card.map((item, index, array) => {
                    // console.log(item);
                    if (item.shoe_id === action.payload.shoe_id)
                        item.count += action.payload.count;
                    return item;

                    //* Its not working further investigations are needed
                    // if (item.shoe_id !== action.payload.shoe_id) return item;
                    // const count = item.count;
                    // return Object.assign({}, item, { shoe_id: item.shoe_id, count: count + 1 });
                });
            }
            ,
            removeFromCard: (state, action) => { },

        }
    }
);
export const {
    addToCard,
    setCount,
    removeFromCard
} = cardSlice.actions;
export function selectCard(state) {
    return state.shoppingCardReducer.card;
}
export default cardSlice.reducer;
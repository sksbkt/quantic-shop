import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice(
    {
        name: "card",
        initialState: { idList: [], totalCount: 0 },
        reducers: {
            addToCard: (state, action) => {
                if (state.idList.find(item => item.id === action.payload)) {
                    state.idList.map((item, index, array) => {
                        if (item.id === action.payload) {
                            item.count += 1;
                        }
                    })
                } else {
                    state.idList.push({ id: action.payload, count: 1 })
                }
                state.totalCount += 1;
            },
            setCount: (state, action) => {
                const currentItem = state.idList.find(item => item.id === action.payload.id);
                if (currentItem) {
                    state.totalCount -= currentItem.count;
                    if (action.payload.count >= 1) {
                        currentItem.count = action.payload.count;
                        state.totalCount += action.payload.count;
                    }
                    else {
                        state.idList.splice(state.idList.indexOf(currentItem), 1);
                    }
                } else {
                    console.log('Item not found');
                }
            }, setCard: (state, action) => {
                state.card = action.payload;

            }
            ,
            removeFromCard: (state, action) => {

            },
        }
    }
);
export const {
    addToCard,
    setCount,
    setCard,
    removeFromCard
} = cardSlice.actions;
export function selectCard(state) {
    return state.shoppingCard;
}
export default cardSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice(
    {
        name: "card",
        initialState: { card: [], totalCount: 0, totalPrice: 0 },
        reducers: {
            addToCard: (state, action) => {
                if (state.card.find(item => item.shoe_id === action.payload.shoe_id)) {
                    state.card.map((item, index, array) => {
                        if (item.shoe_id === action.payload.shoe_id) {
                            console.log('if');
                            if (item.count + action.payload.count >= 1) {
                                item.count += action.payload.count;
                            } else {
                                state.card.splice(index, 1);
                            }
                            state.totalPrice += action.payload.price * action.payload.count;
                            state.totalCount += action.payload.count;
                        }
                        return item;
                    });
                } else if (action.payload.count >= 1) {
                    console.log('else');
                    state.card.push(action.payload);
                    state.totalCount += action.payload.count;
                    state.totalPrice += action.payload.price;
                }
                //? temporary workaround for minus total price after reducing totalCount back to zero
                if (state.totalCount <= 0)
                    state.totalPrice = 0;
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
    return state.shoppingCard;
}
export default cardSlice.reducer;
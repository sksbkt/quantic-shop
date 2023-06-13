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

                //! DEPRECATED CODE
                // if (state.card.find(item => item.shoe_id === action.payload.shoe_id)) {
                //     state.card.map((item, index, array) => {
                //         if (item.shoe_id === action.payload.shoe_id) {

                //             if (item.count + action.payload.count >= 1) {
                //                 item.count += action.payload.count;
                //             } else {
                //                 state.card.splice(index, 1);
                //             }

                //             state.totalPrice += action.payload.price * action.payload.count;
                //             state.totalCount += action.payload.count;

                //         }
                //         return item;
                //     });
                // } else if (action.payload.count >= 1) {
                //     state.card.push(action.payload);
                //     state.totalCount += action.payload.count;
                //     state.totalPrice += action.payload.price;
                // }
                // //? temporary workaround for minus total price after reducing totalCount back to zero
                // if (state.totalCount <= 0)
                //     state.totalPrice = 0;
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
                        console.log('CALLED');
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
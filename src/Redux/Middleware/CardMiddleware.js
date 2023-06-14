import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addToCard, removeFromCard } from "../Slices/CardSlice";

const CardListenMiddleware = createListenerMiddleware();
CardListenMiddleware.startListening({
    matcher: isAnyOf(
        addToCard,
        removeFromCard
    ),
    effect: (action, listenApi,) => {
        listenApi.cancelActiveListeners();

        switch (action.type) {
            case addToCard.type:
                let storedCard = [];
                storedCard = JSON.parse(localStorage.getItem('card'));
                if (storedCard === null) {
                    storedCard = [];
                    storedCard[0] = action.payload.shoe_id;
                }
                else {
                    let result = [];
                    for (const index in storedCard) {
                        result.push(storedCard[index]);
                    }
                    result.push(action.payload.shoe_id);
                    storedCard = null;
                    storedCard = result;
                }
                localStorage.setItem('card', JSON.stringify(storedCard));
                break;
            case setCount.type:

                break;
            case removeFromCard.type:
                break;

            default:
                break;
        }
    }
})

export default CardListenMiddleware.middleware
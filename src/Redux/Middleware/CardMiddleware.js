import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addToCard, removeFromCard } from "../Slices/CardSlice";
import { OBJECT } from "swr/_internal";

const CardListenMiddleware = createListenerMiddleware();
CardListenMiddleware.startListening({
    matcher: isAnyOf(
        addToCard,
        removeFromCard
    ),
    effect: (action, listenApi) => {
        listenApi.cancelActiveListeners();

        console.log('MIDDELWARE CALLED', action.type);
        switch (action.type) {
            case addToCard.type:
                let storedCard = [];
                storedCard = JSON.parse(localStorage.getItem('card'));
                if (storedCard === null) {
                    storedCard = [];
                    storedCard[0] = action.payload;
                }
                else {
                    let result = [];
                    for (const index in storedCard) {
                        result.push(storedCard[index]);
                    }
                    result.push(action.payload);
                    storedCard = null;
                    storedCard = result;
                }
                localStorage.setItem('card', JSON.stringify(storedCard));
                break;
            case removeFromCard.type:
                break;

            default:
                break;
        }
    }
})

export default CardListenMiddleware.middleware
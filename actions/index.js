export const ADD_NEW_DECK = "ADD_NEW_DECK"
export const RECEIVE_DECKS = "RECEIVE_DECKS"

export function addNewDeck ( newDeck) {
    return {
        type: ADD_NEW_DECK,
        newDeck
    }
}

export function receiveDecks ( decks ) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}
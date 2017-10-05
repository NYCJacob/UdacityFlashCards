export const ADD_NEW_DECK = "ADD_NEW_DECK"


export function addNewDeck ( deckTitle) {
    return {
        type: ADD_NEW_DECK,
        deckTitle : deckTitle
    }
}
export const ADD_NEW_DECK = "ADD_NEW_DECK"
export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_ENTRY = "ADD_ENTRY"
export const DELETE_DECK = "DELETE_DECK"

export function addNewDeck ( newDeck) {
    return {
        type: ADD_NEW_DECK,
        newDeck
    }
}

export function deleteReduxDeck( key){
    return {
        type: DELETE_DECK,
        key
    }
}

export function receiveDecks ( decks ) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function addEntry( newQuiz ) {
    return {
        type: ADD_ENTRY,
        title: newQuiz.title,
        question: newQuiz.question,
        answer: newQuiz.answer
    }
}


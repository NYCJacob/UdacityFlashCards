export const ADD_NEW_DECK = "ADD_NEW_DECK"
export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_ENTRY = "ADD_ENTRY"

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

// this.props.dispatch(addEntry({  title : title, question: question, answer: answer } ));
export function addEntry( newQuiz ) {
    debugger;
    return {
        type: ADD_ENTRY,
        title: newQuiz.title,
        question: newQuiz.question,
        answer: newQuiz.answer
    }
}
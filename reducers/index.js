import { ADD_NEW_DECK, RECEIVE_DECKS, ADD_ENTRY} from "../actions/index"


function decks (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS :
            return {
                ...action.decks
            }

        case ADD_NEW_DECK :
            return {
                ...state,
                ...action.newDeck
            }

        case ADD_ENTRY :
            let quizItem = { question: action.question, answer: action.answer}
            // state[action.title].questions.push(quizItem);
            let targetDeck = state[action.title];
            targetDeck.questions.push(quizItem);
            console.log(targetDeck)
            debugger
            return {
                ...state,
                [action.title]: targetDeck
            }

        default :
            return state
    }
}

export default decks;
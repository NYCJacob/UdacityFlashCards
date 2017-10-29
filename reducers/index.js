import { ADD_NEW_DECK, DELETE_DECK, RECEIVE_DECKS, ADD_ENTRY} from "../actions/index"


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

        case DELETE_DECK:
            let newState = state;
            delete newState[action.key]   // ES6 feature
            return {
                ...newState
            }

        case ADD_ENTRY :
            let quizItem = { question: action.question, answer: action.answer}
            let targetDeck = state[action.title];
            targetDeck.questions.push(quizItem);
            return {
                ...state,
                [action.title]: targetDeck
            }

        default :
            return state
    }
}

export default decks;
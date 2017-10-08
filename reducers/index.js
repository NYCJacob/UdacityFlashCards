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
            return {
                ...state,
                ...action.newQuizItem
            }

        default :
            return state
    }
}

export default decks;
import { ADD_NEW_DECK, RECEIVE_DECKS} from "../actions/index"


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

        default :
            return state
    }
}

export default decks;
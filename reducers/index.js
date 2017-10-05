import { ADD_NEW_DECK} from "../actions/index"


function decks (state = {}, action) {
    switch (action.type) {

        case ADD_NEW_DECK :
            return {
                ...state,
                ...action.deckTitle
            }

        default :
            return state
    }
}

export default decks;
import { AsyncStorage } from 'react-native';

const DB_KEY = 'DB_CARDS';

export function saveNewDeck(title) {
    return AsyncStorage.mergeItem( DB_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}


export function fetchDecks() {
    return AsyncStorage.getItem( DB_KEY, ( result ) => {
        return JSON.parse( result )
    })
}

// submitEntry(title, {question, answer});
export function submitEntry(title, card) {
    return AsyncStorage.getItem(DB_KEY)
        .then(result => {
            const data = JSON.parse(result);
            debugger;

            data[title].questions.push(card);
            AsyncStorage.setItem(DB_KEY, JSON.stringify(data));
        })
}

export function deckExits( title) {
    return AsyncStorage.getItem(DB_KEY)
        .then( result => {
            const decks = JSON.parse( result );
            if ( decks === null ) {
                console.log("no decks")
                return 0;
            } else if ( decks[title] ) {
                console.log( decks[title] + 'exists');
                return -1
            } else {
                console.log("deck name not taken")
                return 1
            }
        })
    }


export function removeDeck (key) {
    return AsyncStorage.getItem(DB_KEY)
        .then((results) => {
            const data = JSON.parse(results);
            data[key] = undefined;
            delete data[key];
            AsyncStorage.setItem(DB_KEY, JSON.stringify(data));
        })
}


import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'flashCards:notification';
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

export function multiRemove(keys) {
    return AsyncStorage.multiRemove( keys, (err) => {
        console.log('multiremove');
    })
}
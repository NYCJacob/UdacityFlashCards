import { AsyncStorage } from 'react-native';;
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'flashCards:notification';
const DB_KEY = 'DB_FLASHCARDS';



export function saveNewDeck(title) {
    return AsyncStorage.mergeItem( DB_KEY, JSON.stringify({
        [title]: []
    }))
}
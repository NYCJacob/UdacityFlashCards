import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { white, purple } from '../utils/colors';

//TODO: set android or iOS styles objects based on Platform response

// ListDecks styles
let ListDecksStyles = {
    container: {
        flex: 1,
        padding: 10
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    noDecks: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

let DeckListItemStyles = {
    listItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        marginBottom: 20,
        shadowRadius: 6,
        shadowOpacity: 1,
        shadowColor: 'rgba(0,0,0,24)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
    titleStyle: {
        fontSize: 30
    },
    cardNumberDesc: {
        fontSize: 20,
        color: '#BBB'
    }
}

let DeckViewStyles = {
    deckView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100
    },
    headerText: {
        fontSize: 50,
    },
    detailText: {
        fontSize: 35,
        color: '#BBB'
    },
    addCardButton: {
        flex : 1,
        borderWidth: 1,
        borderColor: '#1485ff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        padding : 20,
        minWidth: 200
    },
    startQuizButton: {
        flex: 1,
        backgroundColor: '#1485ff',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 5,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        minWidth: 200
    }
}

let AddDeck = {
    addDeck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    headingText: {
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'center'
    },
    inputStyle: {
        flex : 1,
        alignSelf: 'stretch',
        height: 80,
        fontSize: 20,
        alignItems: 'center'
    },
    buttonStyle: {
        padding: 10,
        width: 100,
        backgroundColor: '#1485ff',
        borderWidth: 1,
        borderColor: '#1485ff',
        marginTop: 5,
        borderRadius: 3
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center'
    },
    iosSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40
    },
    androidSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 2,
        height: 45,
        marginLeft: 30,
        marginRight: 30,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    err: {
        color: '#F00',
        fontSize: 20
    }
}

let addQuizItem = {
    AddQuiz: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addCardInput: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        fontSize: 30
    },
    addQuizItemButton: {
        backgroundColor: '#1485ff',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    addCarderr: {
        color: '#F00',
        fontSize: 20
    }
}

let examStyles = {
    // container: {
    //     flex: 1
    // },
    counterText: {
        fontSize: 20
    },
    mainView: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    mainFontStyle: {
        fontSize: 35,
        textAlign: 'center'
    },
    toggleButtonText: {
        fontSize: 20,
        color: '#F00'
    },
    toggleButton: {
        marginTop: 20
    },
    correctButton: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#00B300',
        marginTop: 20,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    incorrectButton: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#F00',
        marginTop: 10,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    examButtonText: {
        color: '#FFF',
        fontSize: 20
    },
    scoreHeading: {
        fontSize: 30
    },
    score: {
        fontSize: 50,
        color: '#FFF'
    },
    buttonContainer: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export const styles = StyleSheet.create({
    ...ListDecksStyles,
    ...DeckListItemStyles,
    ...DeckViewStyles,
    ...AddDeck,
    ...addQuizItem,
    ...examStyles
});
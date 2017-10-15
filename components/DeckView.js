import React, {Component } from 'react';
import {
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { removeDeck } from "../utils/api"
import { deleteReduxDeck} from "../actions/index"
import { styles} from "../utils/styles"


class DeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params;

        return {
            title
        }
    }

    deleteDeck = ( key ) => {
        console.log("delete deck");

        removeDeck( key );
        // debugger;
        this.props.dispatch( deleteReduxDeck( key) );
        console.log( this.props.navigation );
        debugger;
        this.props.navigation.goBack('Home');
    }


    render() {
        const { deck } = this.props;

        return (
            <View style={{flex: 1}}>
                <View style={styles.deckView}>
                    <Button
                        onPress={ () => this.deleteDeck( deck.title ) }
                        title="Delete Deck"
                        color="#4e4cb8"
                        accessibilityLabel="Delete the deck"
                    />


                    <MaterialCommunityIcons name='cards' size={100} color='#1485ff' />
                    <Text style={styles.headerText}>{deck.title}</Text>
                    <Text style={styles.detailText}>{deck.questions ? `${deck.questions.length} Question(s)` : '0 Questions'}</Text>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate(
                            'AddQuizItem',
                            {title: deck.title}
                        )}
                        style={styles.addCardButton}>
                        <Text style={{ fontSize: 20 }}>Add Questions</Text>
                    </TouchableOpacity>

                    { deck.questions.length > 0 &&
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate(
                                'Exam',
                                {title: deck.title}
                            )}
                            style={styles.startQuizButton}>
                            <Text style={{ fontSize: 20, color: '#FFF' }}>Start Quiz</Text>
                        </TouchableOpacity>
                    }



                </View>

            </View>
        )
    }
}



function mapStateToProps(state, { navigation }) {
    const { title } = navigation.state.params;

    return {
        deck: state[title]
    }
}

export default connect(mapStateToProps)(DeckView);

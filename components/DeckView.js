import React, {Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Platform,
    Alert
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { styles} from "../utils/styles"


class DeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params;

        return {
            title
        }
    }


    render() {
        const { deck } = this.props;

        return (
            <View style={{flex: 1}}>
                <View style={styles.deckView}>
                    <MaterialCommunityIcons name='cards' size={300} color='#1485ff' />
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

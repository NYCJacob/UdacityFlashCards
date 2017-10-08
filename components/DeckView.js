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
                <View style={styles.container}>
                    <MaterialCommunityIcons name='cards' size={300} color='#1485ff' />
                    <Text style={styles.headerText}>{deck.title}</Text>
                    <Text style={styles.detailText}>{deck.questions ? `${deck.questions.length} Card(s)` : '0 Card'}</Text>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate(
                            'AddQuizItem',
                            {title: deck.title}
                        )}
                        style={styles.addCardButton}>
                        <Text style={{ fontSize: 20 }}>Add Card</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.startQuiz.bind(this)}
                        style={styles.startQuizButton}>
                        <Text style={{ fontSize: 20, color: '#FFF' }}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 50,
    },
    detailText: {
        fontSize: 35,
        color: '#BBB'
    },
    addCardButton: {
        width: 200,
        borderWidth: 1,
        borderColor: '#1485ff',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    startQuizButton: {
        width: 200,
        backgroundColor: '#1485ff',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});

function mapStateToProps(state, { navigation }) {
    const { title } = navigation.state.params;

    return {
        deck: state[title]
    }
}

export default connect(mapStateToProps)(DeckView);

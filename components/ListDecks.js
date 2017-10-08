import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import  {List, ListItem, Button } from 'react-native-elements';
import { fetchDecks, multiRemove} from "../utils/api";
import TextButton  from "./TextButton"
import { receiveDecks } from "../actions/index";


function listSubHeader(numQuestions) {
    if (questionsEmpty > 0) {
        return
    } else {
        return
        "No Questions Entered"
    }

}

class ListDecks extends Component {
    state = {
        ready: false
    }

    componentDidMount() {
        fetchDecks()
            .then( (decks) => this.props.dispatch(receiveDecks( JSON.parse( decks ) )) )
            .then(() => this.setState(() => ({
                ready: true
            })))
    }

    // clearData = (keyArray) => {
    //     multiRemove(keyArray)
    // }

    render() {
        const { decks } = this.props;
        const decksCount = Object.keys(decks).length;
        const decksObj = Object.keys(decks).map((key) => {
                return decks[key];
            });

        console.log( this.props );
        return (
            <View style={styles.container}>
                <Text>ListDecks Component</Text>

                { decksCount > 0
                    ?
                    <FlatList
                        data={decksObj}
                        renderItem={({item, index}) =>
                            <ListItem
                                roundAvatar
                                title={item.title}
                                subtitle={
                                    <View>
                                        <Text>{`${item.questions.length} questions`}</Text>
                                        <TouchableOpacity style={styles.button}
                                                          onPress={() =>
                                                              this.props.navigation.navigate(
                                                              'AddQuizItem',
                                                              {title: "Add Quiz Item"}
                                                          )}>
                                            <TextButton>Add Questions</TextButton>
                                        </TouchableOpacity>

                                    </View>
                                }

                            />
                        }
                        keyExtractor={(item, index) => index}
                    />
                    : (
                        <View style={styles.noDecks}>
                            <MaterialCommunityIcons name='information-outline' size={100} color='#1485ff' />
                            <Text style={styles.textStyle}>No Deck Available. Add a new quiz deck via the Add Deck tab above.</Text>
                        </View>
                    )}

            </View>
        )
    }
}

const styles = StyleSheet.create({
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
});

function mapStateToProps( state ) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(ListDecks);

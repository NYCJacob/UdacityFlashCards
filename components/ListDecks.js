import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import DeckListItem from './DeckListItem'
import { fetchDecks, multiRemove} from "../utils/api";
import TextButton  from "./TextButton"
import { receiveDecks } from "../actions/index";
import {styles} from "../utils/styles"
import { AppLoading } from 'expo';

// TODO: app loading from expo


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


    render() {
        const { decks } = this.props;
        const decksCount = Object.keys(decks).length;
        const decksObj = Object.keys(decks).map((key) => {
                return decks[key];
            });
        const { ready } = this.state;

        if (!ready) {
            return <AppLoading />
        }
        
        return (
            <View style={styles.container}>
                { decksCount > 0
                    ?
                    <FlatList
                        data={decksObj}
                        renderItem={({item, index}) =>
                            <DeckListItem
                                navigation={this.props.navigation}
                                title={item.title}
                                cardNumber={item.questions.length}
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


function mapStateToProps( state ) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(ListDecks);

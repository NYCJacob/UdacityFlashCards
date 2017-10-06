import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { fetchDecks, multiRemove} from "../utils/api"
import { receiveDecks } from "../actions/index"



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
        console.log( decks );
        // console.log("Object Keys: ", Object.keys(decks) );
        return (
            <View style={styles.container}>
                <Text>ListDecks Component</Text>
                {/*<TouchableOpacity onPress={this.clearData(Object.keys(decks))}>*/}
                    {/*<Text style={styles.textStyle}>*/}
                        {/*clear data*/}
                    {/*</Text>*/}
                {/*</TouchableOpacity>*/}
                {decks.length > 0
                    ?
                    <FlatList
                        data={ decks }
                        renderItem={({item}) =>
                           <TouchableHighlight>
                               {item.key}
                           </TouchableHighlight>

                        }
                    /> : (
                        <View style={styles.noDecks}>
                            <MaterialCommunityIcons name='information-outline' size={100} color='#1485ff' />
                            <Text style={styles.textStyle}>No Deck Available. Add a new Deck!</Text>
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

function mapStateToProps(state) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(ListDecks);

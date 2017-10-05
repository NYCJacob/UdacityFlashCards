import React, { Component } from 'react';
import { Platform } from 'react-native';
import {
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addNewDeck } from "../actions/index"
import { saveNewDeck } from "../utils/api"
import { white, purple } from '../utils/colors';


function SubmitBtn ({ onPress }) {
    return (
        <TouchableOpacity
            style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
    )
}

class CreateDeck extends Component {

    state = {
        deckTitle: ''
    }

    submit = () => {
        console.log(entry);
        if(this.state.deckTitle !== '') {
            this.setState({ loading: true });
            this.props.dispatch( addNewDeck(this.state.deckTitle) );
            saveNewDeck( this.state.deckTitle );
            this.setState( { loading: false} );
        } else {
            console.log("Empty deck title");
        }
    }

    render() {

        return (
            <KeyboardAvoidingView
                behavior='padding'
                style={styles.containerStyle}>
                <MaterialCommunityIcons name='cards' size={100} color='#1485ff' />
                <Text style={styles.headingText}>What is the title of your new deck?</Text>

                <TextInput
                    style={ styles.inputStyle }
                    placeholder='Enter Title'
                    onChangeText={(title) => this.setState({ deckTitle: title })    }
                    value={this.state.deckTitle}
                />

                <SubmitBtn onPress={this.submit} />

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
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
        // width: 400,
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
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    },
    err: {
        color: '#F00',
        fontSize: 20
    }
});

function mapStateToProps(state) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(CreateDeck);

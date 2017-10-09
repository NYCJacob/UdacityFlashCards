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
import { styles} from "../utils/styles"

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
        if(this.state.deckTitle !== '') {
            this.setState({ loading: true });
            this.props.dispatch( addNewDeck({ [this.state.deckTitle] : {title : this.state.deckTitle, questions : []} }) );
            saveNewDeck( this.state.deckTitle );
            this.setState( { loading: false} );
        } else {
            console.log("Empty deck title");
        }
        this.setState(() => ({
            deckTitle: ''
        }))

        this.props.navigation.navigate(
            'Home'
        )
    }

    render() {

        return (
            <KeyboardAvoidingView
                behavior='padding'
                style={styles.addDeck}>
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



function mapStateToProps(state) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(CreateDeck);

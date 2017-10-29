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
import { saveNewDeck, deckExits } from "../utils/api"
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
        deckTitle: '',
        titleExists : false,
        loading : false
    }


    validate = () => {
        deckExits( this.state.deckTitle )
            .then((result) => {
                console.log(result);
                if ( result === -1 ){
                    this.setState( { titleExists: true })
                } else {
                    this.setState( {titleExists : false, loading : true});
                    this.submit();
                }
            })};

    submit = () => {
        console.log("submit hit");
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

                {this.state.titleExists &&
                    <Text
                        style={styles.addCarderr}>
                        <MaterialCommunityIcons
                            name='close-circle-outline'
                            size={10} color='#F00'
                        />
                        The title already exists, please enter another title.
                    </Text>
                }

                <TextInput
                    style={ styles.inputStyle }
                    placeholder='Enter Title'
                    onChangeText={(title) => this.setState({ deckTitle: title })    }
                    value={this.state.deckTitle}
                />

                <SubmitBtn onPress={this.validate} />

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

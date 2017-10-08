import React, { Component } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { submitEntry} from "../utils/api"
import { addEntry } from "../actions/index"

class AddQuizItem extends Component {
    componentDidUpdate(){

    }

    state = {
        question: '',
        answer: '',
        questionErr: '',
        answerErr: '',
        loading: false
    }

    submit = () => {
        // TODO: make sure no duplicate titles because will be key in deck object
        const { question, answer } = this.state;
        const { title } = this.props.navigation.state.params;

        if(question !== '' && answer !== '') {
            this.setState({ questionErr: '', answerErr: '', loading: true });

            // update redux store
            this.props.dispatch(addEntry({
                [title]: {question : answer}
            }));

            // update local storage via api
            submitEntry(title, {question, answer});
        }

        if(question === '') {
            this.setState({ questionErr: 'Question field is required.' })
        } else {
            this.setState({ questionErr: '' });
        }

        if(answer === '') {
            this.setState({ answerErr: 'Answer field is required.' })
        } else {
            this.setState({ answerErr: '' });
        }
    }


    render() {

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <MaterialCommunityIcons name='cards' size={200} color='#1485ff' />

                <TextInput
                    style={styles.inputStyle}
                    placeholder='Enter Question'
                    onChangeText={text => this.setState({ question: text })}
                    value={this.state.question}
                />
                { this.state.questionErr !== '' &&

                    <Text
                        style={err}>
                        <MaterialCommunityIcons
                            name='close-circle-outline'
                            size={20}
                            color='#F00'
                        />
                        {this.state.questionErr}
                    </Text>
                }

                <TextInput
                    style={styles.inputStyle}
                    placeholder='Enter Answer'
                    multiline={true}
                    onChangeText={text => this.setState({ answer: text })}
                    value={this.state.answer}
                />
                { this.state.answerErr !== ''
                    ?
                    <Text
                        style={styles.err}>
                        <MaterialCommunityIcons
                            name='close-circle-outline'
                            size={20} color='#F00'
                        />
                        {this.state.answerErr}
                    </Text>
                    :
                    <Text></Text> }
                { this.state.loading
                    ?
                    <ActivityIndicator size='small' />
                    :
                    <TouchableOpacity
                        onPress={this.submit}
                        style={styles.addCardButton}>
                        <Text style={{ fontSize: 20, color: '#FFF' }}>Submit Card</Text>
                    </TouchableOpacity>}
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        fontSize: 30
    },
    addCardButton: {
        backgroundColor: '#1485ff',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    err: {
        color: '#F00',
        fontSize: 20
    }
})

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(AddQuizItem);
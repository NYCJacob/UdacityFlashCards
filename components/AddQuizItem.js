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
import { styles} from "../utils/styles"

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
        const { question, answer } = this.state;
        const { title } = this.props.navigation.state.params;

        if(question !== '' && answer !== '') {
            this.setState({ questionErr: '', answerErr: '', loading: true });

            // update redux store
            this.props.dispatch(addEntry({  title : title, question: question, answer: answer } ));

            // update local storage via api
            submitEntry(title, {question, answer});

            this.props.navigation.goBack();
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
            <KeyboardAvoidingView behavior='padding' style={styles.AddQuiz}>
                <MaterialCommunityIcons name='cards' size={200} color='#1485ff' />

                <TextInput
                    style={styles.addCardInput}
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
                    style={styles.addCardInput}
                    placeholder='Enter Answer'
                    multiline={true}
                    onChangeText={text => this.setState({ answer: text })}
                    value={this.state.answer}
                />
                { this.state.answerErr !== ''
                    ?
                    <Text
                        style={styles.addCarderr}>
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
                        style={styles.addQuizItemButton}>
                        <Text style={{ fontSize: 20, color: '#FFF' }}>Submit Card</Text>
                    </TouchableOpacity>}
            </KeyboardAvoidingView>
        )
    }
}


function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(AddQuizItem);
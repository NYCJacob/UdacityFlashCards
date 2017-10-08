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


    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.inputStyle}>
                    Add Quiz Item View
                </Text>
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
    inputStyle: {
        width: 400,
        height: 80,
        fontSize: 30
    },
    addCardButton: {
        width: 200,
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
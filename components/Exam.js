import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { styles} from "../utils/styles"
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import { white} from "../utils/colors"
import { Score } from "./Score"
import { clearLocalNotification, setLocalNotification} from "../utils/notifications"

class Exam extends Component {
    state = {
        showAnswer : false,
        currentQuestion: 1,
        correctScore: 0,
        currentlyViewing: 'Question',
    }

    render() {

        const questionQuantity = this.props.deck.questions.length;


        if(this.state.currentQuestion <= questionQuantity) {

            return (
                <View style={styles.container}>
                    <Text style={styles.counterText}>{this.state.currentQuestion} of {questionQuantity}</Text>

                    <View style={styles.mainView}>
                        <Text style={ styles.mainFontStyle }>
                            {this.props.deck.questions[this.state.currentQuestion -1].question}
                        </Text>


                        {this.state.showAnswer
                        ?
                            <TouchableOpacity
                                onPress={() => (
                                    this.setState({
                                        showAnswer:false
                                    }))
                                }
                                style={styles.correctButton}
                            >
                                <Text style={[styles.examButtonText, {backgroundColor: 'white', color: 'black'}]}>
                                    { `The answer is: ${this.props.deck.questions[this.state.currentQuestion -1].answer}.`}
                                </Text>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity
                                onPress={() => (
                                    this.setState({
                                        showAnswer:true
                                    }))
                                }
                                style={styles.correctButton}
                            >
                                    <Text style={styles.examButtonText}>Show Answer</Text>
                            </TouchableOpacity>
                        }


                        <TouchableOpacity
                            onPress={() => (
                                this.setState({
                                    currentQuestion: this.state.currentQuestion + 1,
                                    correctScore: this.state.correctScore + 1,
                                    showAnswer: false
                                }))
                            }
                            style={styles.correctButton}>
                            <Text style={styles.examButtonText}>Corrent</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => (
                                this.setState({
                                    currentQuestion: this.state.currentQuestion + 1,
                                    showAnswer: false
                                })
                            )}
                            style={styles.incorrectButton}>
                            <Text style={styles.examButtonText}>Incorrect</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            clearLocalNotification()
                .then(setLocalNotification());

            return (
                <View style={[styles.container, styles.CenteredComplete]}>
                    <Score style={styles.CenteredComplete} questionQuantity = {questionQuantity} correctScore={ this.state.correctScore }/>

                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                currentQuestion: 1,
                                correctScore: 0,
                                showAnswer: false
                            });
                        }}
                        style={styles.correctButton}>
                        <Text style={styles.examButtonText}>Retake Test</Text>
                        <MaterialCommunityIcons
                            name='redo'
                            color={white}
                            size={35}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={styles.correctButton}>
                        <Text style={styles.examButtonText}>View Deck</Text>
                    </TouchableOpacity>

                </View>
            )
        }
    }
}


function mapStateToProps(state, { navigation }) {
    const { title } = navigation.state.params;

    return {
        deck: state[title]
    }
}

export default connect(mapStateToProps)(Exam);
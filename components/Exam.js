import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { styles} from "../utils/styles"

class Exam extends Component {
    state = {
        showAnswer : false,
        currentQuestion: 1,
        correctScore: 0,
        currentlyViewing: 'Question',
        bounceValue: new Animated.Value(1)
    }

    render() {
        const {
            examButtonText,
            container,
            counterText,
            mainFontStyle,
            mainView,
            correctButton,
            incorrectButton,
            scoreHeading,
            score
        } = styles;

        const questionQuantity = this.props.deck.questions.length;

        const { bounceValue } = this.state;

        if(this.state.currentQuestion <= questionQuantity) {

            return (
                <View style={container}>
                    <Text style={counterText}>{this.state.currentQuestion} of {questionQuantity}</Text>

                    <View style={mainView}>
                        <Animated.Text style={[mainFontStyle, { transform: [{ scale: bounceValue }] }]}>
                            {this.props.deck.questions[this.state.currentQuestion -1].question}
                        </Animated.Text>


                        {this.state.showAnswer
                        ?
                            <TouchableOpacity
                                onPress={() => (
                                    this.setState({
                                        showAnswer:false
                                    }))
                                }
                                style={correctButton}
                            >
                                <Text style={[examButtonText, {backgroundColor: 'white', color: 'black'}]}>
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
                                style={correctButton}
                            >
                                    <Text style={examButtonText}>Show Answer</Text>
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
                            style={correctButton}>
                            <Text style={examButtonText}>Corrent</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => (
                                this.setState({
                                    currentQuestion: this.state.currentQuestion + 1,
                                    showAnswer: false
                                })
                            )}
                            style={incorrectButton}>
                            <Text style={examButtonText}>Incorrect</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={[container, {justifyContent: 'center', alignItems: 'center'}]}>
                    <Text style={mainFontStyle}>End of Quiz</Text>
                    <Text>Your score is:</Text>
                    <Text>{Math.round((this.state.correctScore / questionQuantity) * 100)}%</Text>
                    <Text>{this.state.correctScore} out of {questionQuantity}</Text>

                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                currentQuestion: 1,
                                correctScore: 0,
                                showAnswer: false
                            });
                        }}
                        style={correctButton}>
                        <Text style={examButtonText}>Retake Test</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={correctButton}>
                        <Text style={examButtonText}>View Deck</Text>
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
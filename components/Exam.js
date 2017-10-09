import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

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
            buttonText,
            container,
            counterText,
            mainFontStyle,
            mainView,
            correctButton,
            incorrectButton,
            backToViewButton,
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
                                <Text style={[buttonText, {backgroundColor: 'white', color: 'black'}]}>
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
                                    <Text style={buttonText}>Show Answer</Text>
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
                            <Text style={buttonText}>Corrent</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => (
                                this.setState({
                                    currentQuestion: this.state.currentQuestion + 1,
                                    showAnswer: false
                                })
                            )}
                            style={incorrectButton}>
                            <Text style={buttonText}>Incorrect</Text>
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
                        <Text style={buttonText}>Retake Test</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={backToViewButton}>
                        <Text>View Deck</Text>
                    </TouchableOpacity>

                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    counterText: {
        fontSize: 20
    },
    mainView: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    mainFontStyle: {
        fontSize: 35,
        textAlign: 'center'
    },
    toggleButtonText: {
        fontSize: 20,
        color: '#F00'
    },
    toggleButton: {
        marginTop: 20
    },
    correctButton: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#00B300',
        marginTop: 20,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    incorrectButton: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#F00',
        marginTop: 10,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backToViewButton: {
        padding: 20,
        borderRadius: 5,
        borderColor: '#00B300',
        borderWidth: 1,
        marginTop: 20,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    },
    scoreHeading: {
        fontSize: 30
    },
    score: {
        fontSize: 50,
        color: '#FFF'
    },
    buttonContainer: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function mapStateToProps(state, { navigation }) {
    const { title } = navigation.state.params;

    return {
        deck: state[title]
    }
}

export default connect(mapStateToProps)(Exam);
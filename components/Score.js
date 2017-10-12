import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { styles } from "../utils/styles"

export class Score extends Component {
    state = {
        opacity: new Animated.Value(0)
    }

    componentDidMount() {
        const {opacity} = this.state;

        Animated.timing(opacity, {toValue : 1, duration : 1000})
            .start()
    }


    render() {
        const { opacity } = this.state;
        const grade = Math.round(this.props.correctScore / this.props.questionQuantity) * 100;
        return (
            <Animated.View style={[styles.CenteredComplete, { opacity }]}>
                <Text style={ styles.mainFontStyle }>End of Quiz</Text>
                <Text>Your score is: { grade }</Text>


            </Animated.View>
            )
    }
}
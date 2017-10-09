import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated, Platform } from 'react-native';
import { styles} from "../utils/styles"


export default class DeckListItem extends Component {
    state = {
        bounceValue: new Animated.Value(1)
    }


    render() {
        const { bounceValue } = this.state;
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate(
                            'DeckView',
                            { title: this.props.title }
                        )}>
                <Animated.View style={[styles.listItem, { transform: [{ scale: bounceValue}] }]}>
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                    <Text style={styles.cardNumberDesc}>{`${this.props.cardNumber} card(s)`}</Text>
                </Animated.View>
            </TouchableOpacity>
        )
    }
};

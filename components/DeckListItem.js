import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated, Platform } from 'react-native';
import { styles} from "../utils/styles"


export default class DeckListItem extends Component {

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate(
                            'DeckView',
                            { title: this.props.title }
                        )}>
                <View style={ styles.listItem }>
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                    <Text style={styles.cardNumberDesc}>{`${this.props.cardNumber} card(s)`}</Text>
                </View>
            </TouchableOpacity>
        )
    }
};

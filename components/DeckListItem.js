import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated, Platform } from 'react-native';


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
                <Animated.View style={[styles.containerStyle, { transform: [{ scale: bounceValue}] }]}>
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                    <Text style={styles.cardNumberDesc}>{`${this.props.cardNumber} card(s)`}</Text>
                </Animated.View>
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        marginBottom: 20,
        shadowRadius: 6,
        shadowOpacity: 1,
        shadowColor: 'rgba(0,0,0,24)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
    titleStyle: {
        fontSize: 30
    },
    cardNumberDesc: {
        fontSize: 20,
        color: '#BBB'
    }
});

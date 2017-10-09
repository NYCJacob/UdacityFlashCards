import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles} from "../utils/styles"

export default function TextButton ({ children, onPress, style = {} }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.reset, style]}>{children}</Text>
        </TouchableOpacity>
    )
}


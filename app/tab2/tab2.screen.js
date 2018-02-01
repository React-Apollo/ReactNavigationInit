//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export class tab2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>tab2</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fc1e70',
    },
});

//make this component available to the app


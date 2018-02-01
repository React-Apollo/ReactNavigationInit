//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export  class list1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> list1</Text>
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
        backgroundColor: '#af7dff',
    },
});

//make this component available to the app


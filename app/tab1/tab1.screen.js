//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

// create a component
export  class tab1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>tab1</Text>
                <Button
        onPress={() => this.props.navigation.navigate('List1', {name: 'Lucy'})}
        title="Go to list1"
      />
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
//export default tab1Screen;

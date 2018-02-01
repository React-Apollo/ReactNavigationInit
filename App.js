import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {GitPoint} from './routes'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <GitPoint />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#af7dff',
  }
  
})

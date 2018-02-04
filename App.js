import React from 'react'
import { StyleSheet} from 'react-native'
import {GitPoint} from './routes'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache} from 'apollo-client-preset';

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjaxudkum2ugf0127kok921bc' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: false
})

export default class App extends React.Component {
  
  render () {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container} >
          <GitPoint />
       </View>
      </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#af7dff',
  }
  
})

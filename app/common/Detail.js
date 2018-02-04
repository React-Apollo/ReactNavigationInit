import React from 'react'
import { View, Text, StyleSheet,ScrollView,Button} from 'react-native'
import HTMLView from 'react-native-htmlview';
import style from 'styled-components/native'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'

const getOneNode = gql`
  query ($id: String!){
    OneNode(id:$id) {
       id,
       tab,
       content,
    }
  }
`;

const StyledButton=style.Button`
  width: 60
  height: 30
  borderColor: 'rgba(2, 204, 255, 1)'
  backgroundColor: 'rgba(207, 77, 68, 1)'
  borderWidth: 1
  borderRadius: 2
 
`
 
  class Detail extends React.Component {

  render () {
    console.log(this.props.data.variables.id)
    
    //const data=this.props.data.OneNode;
    //console.log('data:', data);

    if(this.props.data.loading){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text>Loading...</Text>
            </View>
        )
        //return <Loading/>
    

    }
    const htmlContent = `${this.props.data.OneNode.content}`;
    //console.log(this.props)
    return (
      <ScrollView>
       <HTMLView value={htmlContent} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.07)'
  },
  title: {
    padding: 22,
    color: 'rgba(0,0,0,.8)',
    fontWeight: '300',
    fontSize: 16,
  },
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },

})

export default graphql(getOneNode, {options: ({id, navigation}) => {
  
  return ({
    variables: {
      id: navigation.state.params.id,
     
    }
  });
}})(Detail)
//import liraries
import React, { Component } from 'react';
import { View, Text, FlatList,Button} from 'react-native';
import { List, ListItem ,Header} from 'react-native-elements';
//import Dropdown   from '../common/Drowdown';



import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const allNodesQuery = gql`
  query($page:Int!,$tab:String!) {
    allCnode(page:$page,tab:$tab) {
      id
      title
      tab
      aurl
    }
  }`;
class tab1  extends Component {
    
  state = {
    page: 1,
    tab: "",
  }
  
async componentWillMount() {
    await Font.loadAsync({
        'MaterialIcons': require('@expo/vector-icons/fonts/MaterialIcons.ttf')
     });
}

    render() {
        
      const {navigate} = this.props.navigation;
      console.log(this.props)
      if(this.props.networkStatus===1){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text>Loading...</Text>
            </View>
        )
      }

      if(this.props.networkStatus===2){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text>Loading...</Text>
            </View>
        )
      }
      //console.log(this.props.data);
      return (
        <View>
        
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0,marginTop:0 }}>
         <FlatList
            data={this.props.allCnode}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                refreshing={this.props.networkStatus === 4}
                onRefresh={() => this.props.refetch()}
                title={`${item.title}`}
                subtitle={`${item.tab}`}
                avatar={{ uri: item.aurl }}
                containerStyle={{ borderBottomWidth: 0 }}
                onPress={() => navigate('Detail',{id:`${item.id}`})}
              />
            )}
            keyExtractor={item => item.id}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
        // The fetchMore method is used to load new data and add it
        // to the original query we used to populate the list
        this.props.fetchMore({
          variables: { page: this.props.allCnode.length + 1,tab:"share"},
          updateQuery: (previousResult, { fetchMoreResult }) => {
            // Don't do anything if there weren't any new items
            //console.log(fetchMoreResult)
            if (!fetchMoreResult || fetchMoreResult.allCnode.length === 0) {
              return previousResult;
            }

            return {
              // Concatenate the new feed results after the old ones
              allCnode: previousResult.allCnode.concat(fetchMoreResult.allCnode),
            };
          },
        });
      }}
          />
        </List>
    </View>
      );
    }

    
  }



export default graphql(allNodesQuery,{
  options: {
    
    variables: { page:1, tab:"" },
    
  },
  props: ({ ownProps, data: { loading, allCnode, refetch,fetchMore,networkStatus,updateQuery} }) => ({
    Loading: loading,
    allCnode: allCnode,
    refetch: refetch,
    fetchMore: fetchMore,
    networkStatus: networkStatus,
    updateQuer: updateQuery
  }),
}
  )(tab1);



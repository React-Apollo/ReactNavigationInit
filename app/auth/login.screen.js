import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';
import { AuthSession } from 'expo';

const  CLIENT_ID='f42cc948b4ed106566f2';

export  class LoginScreen extends React.Component {
  state = {
    userInfo: null,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
          <Button title="Ope  Github Login" onPress={this._handlePressAsync} />
      
      </View>
    );
  }

  

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();

    // You need to add this url to your authorized redirect urls on your Facebook app
    console.log({ redirectUrl });

    

    let result = await AuthSession.startAsync({
      authUrl:
        `https://github.com/login/oauth/authorize?response_type=token&client_id=${CLIENT_ID}` +
         `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });

    if (result) {
      this.props.navigation.navigate('Welcome', result.params);  
      
    }

    
  };
}
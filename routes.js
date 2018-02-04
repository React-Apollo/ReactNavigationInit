/* eslint-disable react/prop-types */
import React from 'react'
import {Image} from 'react-native'
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  NavigationActions
} from 'react-navigation'
import { Icon } from 'react-native-elements'


import { colors } from './app/utils'
//import { translate } from 'utils';
import tab1 from './app/tab1/tab1.screen';
import {list1} from './app/tab1';
import {tab2, list2 } from './app/tab2'
import {tab3, list3 } from './app/tab3'
import {tab4, list4 } from './app/tab4'
import Detail from './app/common/Detail'
import {SplashScreen, LoginScreen, WelcomeScreen} from './app/auth'

const sharedRoutes = {
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
    }),
  }
  // StarredRepositoryList: {
  //   screen: StarredRepositoryListScreen,
  //   navigationOptions: ({ navigation }) => ({
  //     title: navigation.state.params.title,
  //   }),
  // }
  };

const HomeStackNavigator = StackNavigator(
  {
    Home: {
      screen: tab1,
      navigationOptions: {
        headerTitle: 'Tab1'
      }
    },
    List1: {
      screen: list1,
      navigationOptions: {
          headerTitle: 'list1'
        }
    },
    ...sharedRoutes,

  },
  {
    headerMode: 'screen'
  }
)

const AboutStackNavigator = StackNavigator(
  {
    About: {
        screen: tab2,
        navigationOptions: {
          headerTitle: 'Tab2'
        }
      },
    List2: {
        screen: list2,
        navigationOptions: {
            headerTitle: 'list2'
          }
      }

  },
  {
    headerMode: 'screen'
  }
  )

  const ContactStackNavigator = StackNavigator(
    {
      Contact: {
        screen: tab3,
        navigationOptions: {
          headerTitle: 'Tab3'
        }
      },
      List3: {
        screen: list3,
        navigationOptions: {
            headerTitle: 'list3'
          }
      }

    },
    {
      headerMode: 'screen'
    }
  )
  const MoreStackNavigator = StackNavigator(
    {
      More: {
        screen: tab4,
        navigationOptions: {
          headerTitle: 'Tab4'
        }
      },
      List4: {
        screen: list4,
        navigationOptions: {
            headerTitle: 'list4'
          }
      }

    },
    {
      headerMode: 'screen'
    }
  )

  const MainTabNavigator = TabNavigator({
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Image source={focused ? require('./app/assets/tabs/tab-icon1/active.png'):require('./app/assets/tabs/tab-icon1/default.png')} />
        ), 
       header: null

      }
    },
    About: {
      screen: AboutStackNavigator,
      navigationOptions: {
          tabBarLabel: 'About',
          tabBarIcon: ({ tintColor, focused }) => (
          <Image source={focused ? require('./app/assets/tabs/tab-icon2/active.png'):require('./app/assets/tabs/tab-icon2/default.png')} />
        ), 
header: null
        }
    },
    Contact: {
      screen: ContactStackNavigator,
      navigationOptions: {
          tabBarLabel: 'Contact',
          tabBarIcon: ({ tintColor, focused }) => (
          <Image source={focused ? require('./app/assets/tabs/tab-icon5/active.png'):require('./app/assets/tabs/tab-icon5/default.png')} />
        ), 
header: null
        }
    },
    More: {
      screen: MoreStackNavigator,
      navigationOptions: {
          tabBarLabel: 'More',
          tabBarIcon: ({ tintColor, focused }) => (
          <Image source={focused ? require('./app/assets/tabs/tab-icon3/active.png'):require('./app/assets/tabs/tab-icon3/default.png')} />
        ), 
header: null
        }
    }

  }, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63'
    }
  })

export const GitPoint = StackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null
      }
    },

   
    Main: {
      screen: MainTabNavigator,
      navigationOptions: {
        header: null
      },
      path:'main'
    }
  },
  {
    headerMode: 'screen',
    URIPrefix: 'gitpoint://',
    cardStyle: {
      backgroundColor: 'transparent'
    }
  }
)

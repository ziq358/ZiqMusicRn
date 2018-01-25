import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  AsyncStorage
} from 'react-native';

import {StackNavigator, TabNavigator, addNavigationHelpers} from 'react-navigation';

import HomeScreen from './HomeScreen';

export default MyApp = StackNavigator({

  HomeScreen :{
    screen: HomeScreen,
    navigationOptions:{
      //header: null, // 去掉actionBar 
      headerStyle: {backgroundColor: '#C73536'}
    }
  },

},{});
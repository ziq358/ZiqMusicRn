import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  AsyncStorage
} from 'react-native';

import {StackNavigator, TabNavigator, addNavigationHelpers} from 'react-navigation';

import DrawerScreen from './DrawerScreen';
import TestScreen1 from './TestScreen1';

export default Routers = StackNavigator({

  DrawerScreen :{
    screen: DrawerScreen,
    navigationOptions:{
      header: null, // 去掉actionBar 
      // headerStyle: {backgroundColor: '#C73536'}
    }
  },

  //在栈中，按名字跳转
  TestScreen1 :{
    screen: TestScreen1,
    navigationOptions:{
      header: null, // 去掉actionBar 
      headerStyle: {backgroundColor: '#C73536'}
    }
  },

},{});
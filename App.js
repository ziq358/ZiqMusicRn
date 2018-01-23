/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  InteractionManager,
} from 'react-native';
import styles from './AppStyles';
import SplashScreen from 'react-native-splash-screen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  componentDidMount() {
    this.timer = setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
          SplashScreen.hide();
      });
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1F1F1F'}}>
        <View style={{ width: 50, height: 50, backgroundColor: '#eb776a'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      </View>
    );
  }
}


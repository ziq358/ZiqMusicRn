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
} from 'react-native';
import styles from './AppStyles';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{}}>
        <View style={[styles.height160, { flex: 1, backgroundColor: '#eb776a', padding: 5}]}>
          <View style={{height: 100, flex: 1, backgroundColor: '#1F1F1F'}}></View>
          <View ></View>
        </View>
      </View>
    );
  }
}


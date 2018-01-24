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
import SplashScreen from 'react-native-splash-screen'

import MyApp from './src/Routers';

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
      <MyApp/>
    );
  }
}


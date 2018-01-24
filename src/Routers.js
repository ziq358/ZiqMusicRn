import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  AsyncStorage
} from 'react-native';

import {StackNavigator, TabNavigator, addNavigationHelpers} from 'react-navigation';

import RecommendScreen from './RecommendScreen';
import SongListScreen from './SongListScreen';
import RankingListScreen from './RankingListScreen';

export default MyApp = StackNavigator({

  RecommendScreen :{
    screen: RecommendScreen,
    navigationOptions:{
      headerTitle: '个性推荐',
      headerBackTitle: null,
      headerStyle: {backgroundColor: '#C73536'}
    }
  },
  SongListScreen :{
    screen: SongListScreen,
    navigationOptions:{
      headerTitle: '歌单',
      headerBackTitle: null,
    }
  },
  RankingListScreen :{
    screen: RankingListScreen,
    navigationOptions:{
      headerTitle: '排行榜',
      headerBackTitle: null,
    }
  },

},{});
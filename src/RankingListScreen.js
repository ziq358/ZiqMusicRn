import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Image,
} from 'react-native';


export default class RankingListScreen extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1F1F1F'}}>
        <View style={{ flex: 1, maxHeight: 50, /*flex 会影响 宽高的设置， 用maxHeight 限制*/
                        backgroundColor: '#eb776a' }}//背景 
                        />{/* 一般注释, 用 {} 包围 */}
                        <Text style={{ color: '#ffffff'}}>RankingListScreen</Text>
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />{/* 一般注释, 用 {} 包围 */}
      </View>
    );
  }
}
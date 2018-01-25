import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Image,
} from 'react-native';


export default class TestScreen1 extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1F1F1F'}}>
        <View style={{ flex: 1, maxHeight: 50, /*flex 会影响 宽高的设置， 用maxHeight 限制*/
                        backgroundColor: '#eb776a' }}//背景
                        />{/* 一般注释, 用 {} 包围 */}
            <Text style={{ color: '#ffffff'}} onPress={()=>{
              const {navigate} = this.props.navigation;/*需要以这种方式来调方法，需要大括号*/
              navigate('MusicScreen');
            }}>test</Text>
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />{/* 一般注释, 用 {} 包围 */}
      </View>
    );
  }
}
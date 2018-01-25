import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  AsyncStorage,
  Button,
  ScrollView,
  View,
} from 'react-native';

import {StackNavigator, TabNavigator, DrawerNavigator,DrawerItems ,} from 'react-navigation';

import HomeScreen from './HomeTabScreen';
import TestScreen1 from './TestScreen1';

export default DrawerScreen = DrawerNavigator({
    HomeScreen :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: '首页',
      }
    },
    HomeScreen1 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: '我的信息',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('./img/left_nav_my_message.png')}
            style={{width: 24, height: 24}}/>),
      }
    },
    HomeScreen2 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: '会员中心',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('./img/left_nav_vip_center.png')}
            style={{width: 24, height: 24}}/>),
      }
    },
    HomeScreen3 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: '商城',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('./img/left_nav_shopping_mall.png')}
            style={{width: 24, height: 24}}/>),
      }
    },
    HomeScreen4 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: '在线听歌免流量',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('./img/left_nav_listen_online.png')}
            style={{width: 24, height: 24}}/>),
      }
    },
    HomeScreen5 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: '听歌识曲',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('./img/left_nav_hear_song_to_find.png')}
            style={{width: 24, height: 24}}/>),
      }
    },
    HomeScreen6 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: '主题皮肤',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('./img/left_nav_theme_skin.png')}
            style={{width: 24, height: 24}}/>),
      }
    },
    HomeScreen7 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: '夜间模式',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('./img/left_nav_night_model.png')}
            style={{width: 24, height: 24}}/>),
      }
    },
    HomeScreen8 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: '定时停止播放',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('./img/left_nav_timer_to_stop.png')}
            style={{width: 24, height: 24}}/>),
      }
    },
    HomeScreen9 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: '扫一扫',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('./img/left_nav_scan.png')}
            style={{width: 24, height: 24}}/>),
      }
    },
    HomeScreen10 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: '我的音乐云盘',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('./img/left_nav_my_cloud.png')}
            style={{width: 24, height: 24}}/>),
      }
    },
    HomeScreen11 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: '音乐闹钟',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('./img/left_nav_alarm_clock.png')}
            style={{width: 24, height: 24}}/>),
      }
    },
    HomeScreen12 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: '驾驶模式',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('./img/left_nav_drive_model.png')}
            style={{width: 24, height: 24}}/>),
      }
    },
  },
  {
     drawerWidth: 300, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentComponent: props => {
        console.log('contentComponent');
        console.log(props);
        return (
            <ScrollView>
                <View>
                    <View style={{paddingVertical: 20, paddingHorizontal: 15, backgroundColor:'#000'}}>
                        <Text style={{color:'#FFF'}}>Header</Text>
                    </View>
                    <DrawerItems {...props} />
                </View>
            </ScrollView>
        )
    },
    contentOptions: {
      initialRouteName: 'HomeScreen', // 默认页面组件
      activeTintColor: 'white',  // 选中文字颜色
      inactiveTintColor: 'black',  // 未选中文字颜色
      activeBackgroundColor: '#ff8500', // 选中背景颜色
      inactiveBackgroundColor: 'white', // 未选中背景颜色
      style: {  // 样式

      },
      onItemPress:(route)=>{//看了源码发现没有调用外部方法，没有调通
        console.log(route);
      }
  },
});
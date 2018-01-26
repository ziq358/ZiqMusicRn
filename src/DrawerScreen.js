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
import DrawerMenuConstant from './DrawerMenuConstant';

export default DrawerScreen = DrawerNavigator({
    HomeScreen :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: () => null,//隐藏了一个Item
      }
    },
    HomeScreen1 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: DrawerMenuConstant.left_nav_my_message.label,
        drawerIcon: ({ tintColor }) => (
          <Image source={DrawerMenuConstant.left_nav_my_message.icon}
            style={DrawerMenuConstant.ICON_STYLE}/>),
      }
    },
    HomeScreen2 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: DrawerMenuConstant.left_nav_vip_center.label,
        drawerIcon: ({ tintColor }) => (
          <Image source={DrawerMenuConstant.left_nav_vip_center.icon}
            style={DrawerMenuConstant.ICON_STYLE}/>),
      }
    },
    HomeScreen3 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: DrawerMenuConstant.left_nav_shopping_mall.label,
        drawerIcon: ({ tintColor }) => (
          <Image source={DrawerMenuConstant.left_nav_shopping_mall.icon}
            style={DrawerMenuConstant.ICON_STYLE}/>),
      }
    },
    HomeScreen4 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: DrawerMenuConstant.left_nav_listen_online.label,
        drawerIcon: ({ tintColor }) => (
          <Image source={DrawerMenuConstant.left_nav_listen_online.icon}
            style={DrawerMenuConstant.ICON_STYLE}/>),
      }
    },
    HomeScreen5 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: DrawerMenuConstant.left_nav_hear_song_to_find.label,
        drawerIcon: ({ tintColor }) => (
          <Image source={DrawerMenuConstant.left_nav_hear_song_to_find.icon}
            style={DrawerMenuConstant.ICON_STYLE}/>),
      }
    },
    HomeScreen6 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: DrawerMenuConstant.left_nav_theme_skin.label,
        drawerIcon: ({ tintColor }) => (
          <Image source={DrawerMenuConstant.left_nav_theme_skin.icon}
            style={DrawerMenuConstant.ICON_STYLE}/>),
      }
    },
    HomeScreen7 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: DrawerMenuConstant.left_nav_night_model.label,
        drawerIcon: ({ tintColor }) => (
          <Image source={DrawerMenuConstant.left_nav_night_model.icon}
            style={DrawerMenuConstant.ICON_STYLE}/>),
      }
    },
    HomeScreen8 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: DrawerMenuConstant.left_nav_timer_to_stop.label,
        drawerIcon: ({ tintColor }) => (
          <Image source={DrawerMenuConstant.left_nav_timer_to_stop.icon}
            style={DrawerMenuConstant.ICON_STYLE}/>),
      }
    },
    HomeScreen9 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: DrawerMenuConstant.left_nav_scan.label,
        drawerIcon: ({ tintColor }) => (
          <Image source={DrawerMenuConstant.left_nav_scan.icon}
            style={DrawerMenuConstant.ICON_STYLE}/>),
      }
    },
    HomeScreen10 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: DrawerMenuConstant.left_nav_my_cloud.label,
        drawerIcon: ({ tintColor }) => (
          <Image source={DrawerMenuConstant.left_nav_my_cloud.icon}
            style={DrawerMenuConstant.ICON_STYLE}/>),
      }
    },
    HomeScreen11 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: DrawerMenuConstant.left_nav_alarm_clock.label,
        drawerIcon: ({ tintColor }) => (
          <Image source={DrawerMenuConstant.left_nav_alarm_clock.icon}
            style={DrawerMenuConstant.ICON_STYLE}/>),
      }
    },
    HomeScreen12 :{
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: DrawerMenuConstant.left_nav_drive_model.label,
        drawerIcon: ({ tintColor }) => (
          <Image source={DrawerMenuConstant.left_nav_drive_model.icon}
            style={DrawerMenuConstant.ICON_STYLE}/>),
      }
    },
  },
  {
    backBehavior: 'none',//不回到初始页面
    drawerWidth: 300, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentComponent: props => {
        console.log('contentComponent');
        console.log(props);
        return (
            <ScrollView>
                <View>
                    <View style={{}}>
                        <Image source={DrawerMenuConstant.header_icon} 
                        style={{width: 300,
                                height: 150,
                                }}/>
                    </View>
                    <DrawerItems {...props} />
                </View>
            </ScrollView>
        )
    },
    contentOptions: {
      initialRouteName: 'HomeScreen', // 默认页面组件
      activeTintColor: '#1f1f1f',  // 选中文字颜色
      inactiveTintColor: '#1f1f1f',  // 未选中文字颜色
      activeBackgroundColor: 'white', // 选中背景颜色
      inactiveBackgroundColor: 'white', // 未选中背景颜色
      style: {  // 样式

      },
      onItemPress:(route)=>{//看了源码发现没有调用外部方法，没有调通
        console.log(route);
      }
  },
});
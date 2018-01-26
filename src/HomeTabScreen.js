import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  RCTView,
  Image,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import {StackNavigator, TabNavigator, addNavigationHelpers} from 'react-navigation';
import AppStyles from './AppStyles';
import DiscoverScreen from './home/DiscoverScreen';
import MusicScreen from './home/MusicScreen';
import FriendsScreen from './home/FriendsScreen';

HomeTab = TabNavigator({
    DiscoverScreen: {   
        screen: DiscoverScreen,
        navigationOptions:{
          tabBarLabel: '发现',
          tabBarVisible: false,
        }
    },
    MusicScreen: {
        screen: MusicScreen,
        navigationOptions:{
          tabBarLabel: '本地音乐',
          tabBarVisible: false,
        }
    },
    FriendsScreen:{
        screen: FriendsScreen,
        navigationOptions:{
          tabBarLabel: '朋友',
          tabBarVisible: false,
        }
    },
},{
    tabBarPosition:'top', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled:false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName:'', // 设置默认的页面组件
    backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarVisible: false,
    tabBarOptions:{
        // iOS属性
        // 因为第二个tabbar是在页面中创建的，所以前景色的设置对其无效，当然也可以通过设置tintColor使其生效
        activeTintColor:'black', // label和icon的前景色 活跃状态下（选中）。
        inactiveTintColor:'black', // label和icon的前景色 不活跃状态下(未选中)。

        activeBackgroundColor:'white', //label和icon的背景色 活跃状态下（选中） 。
        inactiveBackgroundColor:'white', // label和icon的背景色 不活跃状态下（未选中）。

        showLabel:true, // 是否显示label，默认开启。
        // style:{}, // tabbar的样式。
        // labelStyle:{}, //label的样式。

        // 安卓属性
        // activeTintColor:'', // label和icon的前景色 活跃状态下（选中） 。
        // inactiveTintColor:'', // label和icon的前景色 不活跃状态下(未选中)。
        // showIcon:true, // 是否显示图标，默认关闭。 启动 却没有设置图片的话会占位置
        // showLabel:true, //是否显示label，默认开启。
        // labelStyle:{}, // label的样式。
        upperCaseLabel:false, // 是否使标签大写，默认为true。
        // pressColor:'', // material涟漪效果的颜色（安卓版本需要大于5.0）。
        // pressOpacity:'', // 按压标签的透明度变化（安卓版本需要小于5.0）。
        // scrollEnabled:false, // 是否启用可滚动选项卡。
        style:{
          backgroundColor:'white',
        }, // tabbar的样式。
        tabStyle:{
        }, // tab的样式。
        indicatorStyle:{
            backgroundColor:'#C73536'
        }, // 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
        labelStyle:{
        }, // label的样式。
        // iconStyle:{}, // 图标的样式。
    }
});

HomeTab.navigationOptions = props => {
  const { navigation } = props;
  return {
    headerStyle: {backgroundColor: '#C73536'},
    // headerLeft: (
    //     <View>
    //         <TouchableWithoutFeedback  onPress={() => navigation.navigate('DrawerOpen')}>  
    //             <Image source={require('./img/ic_hamberger.png')} style={{width: 20, height: 15, marginLeft:15}} />   
    //         </TouchableWithoutFeedback>  
    //     </View> 
    // ),
    header: ( /* Your custom header */
        <View style={{height: 50, backgroundColor: '#C73536', flexDirection: 'row', alignItems:'center'}}>
            <TouchableWithoutFeedback  onPress={() => navigation.navigate('DrawerOpen')}>  
                 <Image source={require('./img/ic_hamberger.png')} style={{width: 23, height: 23, marginLeft:15}} />   
            </TouchableWithoutFeedback>  
            <TouchableWithoutFeedback  onPress={() => navigation.navigate('DiscoverScreen')}>  
                 <Image source={require('./img/actionbar_discover_normal.png')} style={{width: 40, height: 40, marginLeft:85}} />   
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback  onPress={() => navigation.navigate('MusicScreen')}>  
                 <Image source={require('./img/actionbar_music_normal.png')} style={{width: 40, height: 40, marginLeft:15}} />   
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback  onPress={() => navigation.navigate('FriendsScreen')}>  
                 <Image source={require('./img/actionbar_friends_normal.png')} style={{width: 40, height: 40, marginLeft:15}} />   
            </TouchableWithoutFeedback>
        </View>
    ),
  };
};

export default HomeStack = StackNavigator({
  HomeTab :{
    screen: HomeTab,
  },

},{});
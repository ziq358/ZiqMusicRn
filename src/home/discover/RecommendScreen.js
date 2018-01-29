import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ListView,
} from 'react-native';
import Swiper from 'react-native-swiper';

function getData(){
    var data = ['SwiperType', 'ThreeCircle', 'RecommendSongList','ExclusiveSendOut',
            'NewestMusic', 'RecommendMv', 'Radio', 'AdjustOrder'
    ];
    return data
}

export default class RecommendScreen extends Component<{}> {
  constructor(props){
      super(props);
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2 });
      this.state = {
          dataSource : ds.cloneWithRows(getData()),
      };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff'}}>
        <ListView style={{flex : 1}}
            dataSource={this.state.dataSource}
            renderRow={ 
              this.renderRow
            }
        />
      </View>
    );
  }

  renderRow(rowData, sectionID, rowID){
        switch(rowData){
          case 'SwiperType':
            return <SwiperType />
          case 'ThreeCircle':
            return <ThreeCircle />
          case 'RecommendSongList':
            return <RecommendSongList />
          case 'ExclusiveSendOut':
            return <ExclusiveSendOut />
          case 'NewestMusic':
            return <NewestMusic />
          case 'RecommendMv':
            return <RecommendMv />
          case 'Radio':
            return <Radio />
          case 'AdjustOrder':
            return <AdjustOrder />
        }
        return null
  }

}

class SwiperType extends Component<{}>{
  constructor(props){
     super(props);
  }

  render(){
    return (
        <View style={{height: 150}}>
          <Swiper style={{}}
                  showsButtons={false} 
                  autoplay autoplayTimeout={4}>
            <View style={styles.slide2}>
              <Image style={{resizeMode:'contain', width:Dimensions.get('window').width}} source={ require('../../img/recommend_auto_roll_1.png')} />
            </View>
            <View style={styles.slide2}>
              <Image style={{resizeMode:'contain', width:Dimensions.get('window').width}} source={ require('../../img/recommend_auto_roll_2.png')} />
            </View>
            <View style={styles.slide2}>
              <Image style={{resizeMode:'contain', width:Dimensions.get('window').width}} source={ require('../../img/recommend_auto_roll_3.png')} />
            </View>
            <View style={styles.slide2}>
              <Image style={{resizeMode:'contain', width:Dimensions.get('window').width}} source={ require('../../img/recommend_auto_roll_4.png')} />
            </View>
            <View style={styles.slide2}>
              <Image style={{resizeMode:'contain', width:Dimensions.get('window').width}} source={ require('../../img/recommend_auto_roll_5.png')} />
            </View>
          </Swiper>
        </View>
    );
  }
}
class ThreeCircle extends Component<{}>{

  render(){
    return (
        <View style={{flexDirection: 'row', backgroundColor: 'white', paddingTop: 20, paddingBottom: 20}}> 
            <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../../img/fm_normal.png')}/>
              <Text style= {{marginTop: 5, color:'black', fontSize : 16}}>私人FM</Text>
            </View>
            <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../../img/dailly_normal.png')}/>
              <Text style= {{marginTop: 5, color:'black', fontSize : 16}}>每日歌曲推荐</Text>
            </View>
            <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../../img/upbill.png')}/>
              <Text style= {{marginTop: 5, color:'black', fontSize : 16}}>云音乐新歌榜</Text>
            </View>
        </View>
    );
  }
}
class RecommendSongList extends Component<{}>{
  render(){
    return (
        <View style={{backgroundColor: 'white'}}> 
            <View style={{marginLeft: 10, marginRight: 10, flexDirection: 'row', alignItems: 'center'}}> 
              <Image style={{height: 24,width: 24}} source={require('../../img/icon_recommend_1.png')}/>
              <Text style= {{backgroundColor: 'white', color:'black', fontSize : 14}}>推荐歌曲</Text>
              <Text style= {{textAlign: 'right', flex: 1, marginLeft: 10, backgroundColor: 'white', color:'black', fontSize : 14}}>更多》</Text>
            </View>

            <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 10}}> 
              <View style={{flex: 1, marginLeft: 10, marginRight: 3, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', height: 120, width: Dimensions.get('window').width/3 - 10 }} source={require('../../img/recommend_1_1.png')}/>
                <Text style= {{marginTop: 5, color:'black', fontSize : 14, backgroundColor: 'white'}}>「华语对唱」你不再是你，我还是我</Text>
              </View>
              <View style={{flex: 1,  marginLeft: 3, marginRight: 3,justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', height: 120, width: Dimensions.get('window').width/3 - 10 }} source={require('../../img/recommend_1_2.png')}/>
                <Text style= {{marginTop: 5, color:'black', fontSize : 14, backgroundColor: 'white'}}>【华语爵士】值得珍藏的爵士佳作</Text>
              </View>
              <View style={{flex: 1,  marginLeft: 3, marginRight: 10,justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', height: 120, width: Dimensions.get('window').width/3 - 10 }} source={require('../../img/recommend_1_3.png')}/>
                <Text style= {{marginTop: 5, color:'black', fontSize : 14}}>影响中国歌坛的外语原创</Text>
              </View>
            </View>


            <View style={{flexDirection: 'row'}}> 
              <View style={{flex: 1, marginLeft: 10, marginRight: 3, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', height: 120, width: Dimensions.get('window').width/3 - 10 }} source={require('../../img/recommend_1_4.png')}/>
                <Text style= {{marginTop: 5, color:'black', fontSize : 14, backgroundColor: 'white'}}>【华语】感谢永远有歌，把心境道破</Text>
              </View>
              <View style={{flex: 1,  marginLeft: 3, marginRight: 3,justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', height: 120, width: Dimensions.get('window').width/3 - 10 }} source={require('../../img/recommend_1_5.png')}/>
                <Text style= {{marginTop: 5, color:'black', fontSize : 14, backgroundColor: 'white'}}>年轻时不多经历一点老了拿什么下酒</Text>
              </View>
              <View style={{flex: 1,  marginLeft: 3, marginRight: 10,justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', height: 120, width: Dimensions.get('window').width/3 - 10 }} source={require('../../img/recommend_1_6.png')}/>
                <Text style= {{marginTop: 5, color:'black', fontSize : 14}}>迎着不停摇摆的时间|不燥类摇滚</Text>
              </View>
            </View>
        </View>
    );
  }
}
class ExclusiveSendOut extends Component<{}>{
  render(){
    return (
        <View style={{marginTop: 20, backgroundColor: 'white'}}> 
            <View style={{marginLeft: 10, marginRight: 10, flexDirection: 'row', alignItems: 'center'}}> 
              <Image style={{height: 24,width: 24}} source={require('../../img/icon_recommend_2.png')}/>
              <Text style= {{backgroundColor: 'white', color:'black', fontSize : 14}}>独家放送</Text>
              <Text style= {{textAlign: 'right', flex: 1, marginLeft: 10, backgroundColor: 'white', color:'black', fontSize : 14}}>更多》</Text>
            </View>

            <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 10}}> 
              <View style={{flex: 1, marginLeft: 10, marginRight: 3, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', height: 120, width: Dimensions.get('window').width/2 - 10 }} source={require('../../img/recommend_2_1.png')}/>
                <Text style= {{marginTop: 5, color:'black', fontSize : 14, backgroundColor: 'white'}}>超级面对面 第118期 许嵩：只与同好赏风雅</Text>
              </View>
              <View style={{flex: 1,  marginLeft: 3, marginRight: 3,justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', height: 120, width: Dimensions.get('window').width/2 - 10 }} source={require('../../img/recommend_2_2.png')}/>
                <Text style= {{marginTop: 5, color:'black', fontSize : 14, backgroundColor: 'white'}}>古风歌手小曲儿数字专辑《十念》独家上线</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}> 
              <View style={{flex: 1, marginLeft: 10, marginRight: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', height: 148, width: Dimensions.get('window').width}} source={require('../../img/recommend_2_3.png')}/>
                <Text style= {{marginTop: 5, color:'black', fontSize : 14, backgroundColor: 'white'}}>福利优选：3亿人的APP， 总有属于你的分贝</Text>
              </View>
            </View>
        </View>
    );
  }
}
class NewestMusic extends Component<{}>{
  render(){
    return (
        <View style={{marginTop: 10, flexDirection: 'row', backgroundColor: 'red', paddingTop: 20, paddingBottom: 20}}> 
            
        </View>
    );
  }
}
class RecommendMv extends Component<{}>{
  render(){
    return (
        <View style={{marginTop: 10, flexDirection: 'row', backgroundColor: 'red', paddingTop: 20, paddingBottom: 20}}> 
            
        </View>
    );
  }
}
class Radio extends Component<{}>{
  render(){
    return (
        <View style={{marginTop: 10, flexDirection: 'row', backgroundColor: 'red', paddingTop: 20, paddingBottom: 20}}> 
            
        </View>
    );
  }
}
class AdjustOrder extends Component<{}>{
  render(){
    return (
        <View style={{marginTop: 10, flexDirection: 'row', backgroundColor: 'red', paddingTop: 20, paddingBottom: 20}}> 
            
        </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
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
    var data = ['SwiperType', 'row'];
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

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    height: 200,
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
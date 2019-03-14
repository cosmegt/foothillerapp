import React from 'react';
import { View, Text, Image, } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';



export default class HomeScreen extends React.Component {
  render() {
    // some comment
    return (
      <View>
        
        <View>
          <Text style={styles.Title}>{"\n"}{this.props.name} {this.props.email}</Text>
        </View>
        <Swiper style={styles.subContent} showsPagination={false}>
          
        </Swiper>
      </View>
    );
  }
}


const styles = {
  Title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderBottomColor: '#FFF',
  },
  text: {
    color: '#FFF',
    fontSize: 22,

  },
  subContent:{
    // flex: .5,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 3,
    // borderColor: '#FFF',
  }
}
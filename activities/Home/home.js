import React from 'react';
import { View, Text, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';
import { accountName, Login } from '../login/login.js';


export default class HomeScreen extends React.Component {
  render() {
    // some comment
    return (
      <View>
        
        <View>
          <Text style={styles.Title}>{"\n"}Parker George</Text>
        </View>
        <Swiper style={styles.subContent} showsPagination={false}>
          <View style={styles.subContent}>
            <Image 
              source={require('./schedule.png')}
              style={{
                width: 50,
                height: 50,
                }}>
            </Image>
            <Text style={styles.text}>Today is a Regular Day</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.text}>Your Next Class {"\n"}Math</Text>    
          </View>
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
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 3,
    // borderColor: '#FFF',
  }
}
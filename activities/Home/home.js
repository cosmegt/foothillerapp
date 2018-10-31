import React from 'react';
import { View, Text, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>{"\n"}Cosme Chavez (327137)</Text>
        </View>
        <Swiper showsButtons={false} showsPagination={false}>
          <View style={styles.subContent}>
            <Image 
              source={require('./schedule.png')}
              style={{width: 50, height: 50, justifyContent: 'center', alignContent: 'center'}}></Image>
              <Text style={styles.todo}>Today is a Regular Day</Text>
          </View>
          <View style={styles.subContent}>
            
          </View>
        </Swiper>
      </View>
    );
  }
}


const styles = {
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  todo: {
    color: '#FFF',
    fontSize: 22,

  },
  subContent: {
    justifyContent: 'center',
    alignContent: 'center'
  }
}
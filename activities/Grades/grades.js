import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

export default class GradesScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.Title}>{"\n"}Grades</Text>
        </View>
        <Swiper showsButtons={false} showsPagination={false}>
          <View style={styles.subContent}>

          </View>
          <View style={styles.subContent}>
            
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
  todo: {
    color: '#FFF',
    fontSize: 22,

  },
  subContent: {
    justifyContent: 'center',
    alignContent: 'center',

  }
}
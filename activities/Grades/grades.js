import React from 'react';
import { View, Text } from 'react-native';
//import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

export default class GradesDisplay extends React.Component {
  render() {
    return (
      <View style={styles.Slide}>
        <View>
          <Text style={styles.Title}>{"\n"}Grades</Text>
        </View>
      </View>
    );
  }
}


const styles = {
  Slide: {
    backgroundColor: '#3fa2d3',
    flex: 1
  },
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
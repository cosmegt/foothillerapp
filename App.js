//React Default Imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//React Addons Imports
import Swiper from 'react-native-swiper';
//Project Activities
import HomeScreen from './activities/Home/home'
import GradesScreen from './activities/Grades/grades';
import CalendarScreen from './activities/Calendar/calendar'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>Hello World</Text>

      </View>  
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
//React Imports
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
//Project Activities
//import HomeScreen from './activities/Home/home'
//import GradesScreen from './activities/Grades/grades';
//import CalendarScreen from './activities/Calendar/calendar';

export default class App extends React.Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Grades</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Schedule</Text>
        </View>
      </Swiper>  
    );
  }
}


const styles = StyleSheet.create({
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
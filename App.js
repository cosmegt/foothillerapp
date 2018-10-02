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
      <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false} index={1}>
        <View style={styles.slide1}>
        {/*activities/grades*/}
          <GradesScreen/>
        </View>
        <View style={styles.slide2}>
        {/*activities/home*/}
          <HomeScreen/>
        </View>
        <View style={styles.slide3}>
        {/*activities/calendar*/}
          <CalendarScreen/>  
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
})
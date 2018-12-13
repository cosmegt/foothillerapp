//React Imports
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
//Import Misc Assets
import Gradient from '../assets/gradient'

//Project Activities
import HomeScreen from './Home/home';
import ScheduleScreen from './Schedule/schedule';
import GradesScreen from './Grades/grades';
import CalendarScreen from './Calendar/calendar';
import PlannerScreen from './Planner/planner'


export default class Content extends React.Component {
  render() {
    return (
      <Swiper containerStyle={styles.wrapper} showsButtons={false} showsPagination={false}>
        <View style={styles.slide}>
          <Gradient colorize="rgba(0, 0, 0,0.5)"/>
          <HomeScreen/>
        </View>
        <View style={styles.slide}>
          <Gradient colorize="rgba(0, 0, 0,0.5)"/>
          <GradesScreen/>
        </View>
        <View style={styles.slide}>
          <Gradient colorize="rgba(0, 0, 0,0.5)"/>
          <ScheduleScreen/>
        </View>
        <View style={styles.slide}>
          <Gradient colorize="rgba(0, 0, 0,0.5)"/>
          <CalendarScreen/>
        </View>
        <View style={styles.slide2}>
          <Gradient colorize="rgba(0, 0, 0,0.5)"/>
          <PlannerScreen/>
        </View>
      </Swiper>  
    );
  }
}

var Fullwidth = Dimensions.get('window').width;
var Fullheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    slide: {
      flex: 1,
      //justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3fa2d3',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    slide2: {
      flex: 1,
      backgroundColor: '#3fa2d3',
      //alignItems: 'center',
    }
})
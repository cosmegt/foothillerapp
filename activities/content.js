//React Imports
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
//Import Misc Assets
import Gradient from '../assets/gradient';

//Project Activities
import HomeScreen from './Home/home';
import ScheduleScreen from './Schedule/schedule';
import GradeScreen from './Grades/gradesRouter';
import CalendarScreen from './Calendar/calendar';
import PlannerScreen from './Planner/planner';
import SettingsScreen from './Settings/settings';


export default class Content extends React.Component {
  render() {
    return (
      <Swiper containerStyle={styles.wrapper} showsButtons={false} showsPagination={false}>
        
        <Swiper horizontal={false} showsPagination={false} showsButtons={false} containerStyle={styles.wrapper} loop={false}>
          <View style={styles.slide}>
            <Gradient colorize="rgba(0, 0, 0,0.5)"/>
            <HomeScreen name={this.props.nameGoogle} email={this.props.emailGoogle} photo={this.props.photoUrl}/>
          </View>
          <View style={styles.slide}>
              <Gradient colorize="rgba(0, 0, 0,0.5)"/>
              <SettingsScreen />
          </View>
        </Swiper>

        <View style={styles.slide}>
          <Gradient colorize="rgba(0, 0, 0,0.5)"/>
          <GradeScreen email={this.props.emailGoogle}/>
        </View>
        <View style={styles.slide}>
          <Gradient colorize="rgba(0, 0, 0,0.5)"/>
          <ScheduleScreen/>
        </View>
        <View style={styles.slide}>
          <Gradient colorize="rgba(0, 0, 0,0.5)"/>
          <CalendarScreen/>
        </View>
        <View style={styles.slide}>
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
    }
})
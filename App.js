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
        
        <View>
        {/*activities/grades*/}
          <GradesScreen/>
        </View>
        
        <View>
        {/*activities/home*/}
        
          <HomeScreen/>
        </View>
        
        <View>
        {/*activities/calendar*/}
        
          <CalendarScreen/>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  }
})
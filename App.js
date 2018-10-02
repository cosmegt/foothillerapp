//React Default Imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//React Addons Imports
import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';
//Project Activities
//import HomeScreen from './activities/Home/home'
//import GradesScreen from './activities/Grades/grades';
//import CalendarScreen from './activities/Calendar/calendar';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <RootStack></RootStack>

      </View>  
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


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
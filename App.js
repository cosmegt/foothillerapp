//React Utils
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//React Addons
import { createStackNavigator } from 'react-navigation';
//Project Activities
import HomeScreen from './activities/Home/home'
import GradesScreen from './activities/Grades/grades';



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Grades: GradesScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStack style={styles.container}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

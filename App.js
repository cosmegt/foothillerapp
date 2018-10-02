//React Utils
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Project Activities
import HomeScreen from './activities/Home/home'
import GradesScreen from './activities/Grades/grades';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, World</Text>
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

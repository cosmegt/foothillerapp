//React Imports
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import Content from './activities/content';
import LoginScreen from './activities/login/login';
/*



Do Not Touch This File


*/




export default class App extends React.Component {
  render() {

    return (
      <SafeAreaView style={styles.default}>
        <LoginScreen />
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  default: {
    flex:1
  },
  Title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderBottomColor: '#FFF',
  },
  navBar:{ 
    position: 'absolute',
    backgroundColor: 'white',
    left: 0,
    right: 0,
    bottom: 0,
  }
})
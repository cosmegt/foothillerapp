//React Imports
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Content from './activities/content'



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.default}>
        <Content/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  default: {
    flex:1
  }
})
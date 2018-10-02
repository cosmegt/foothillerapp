import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class CalendarScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#9DD6EB'}}>
        <Text style={styles.text}>Calendar</Text>
      </View>
    );
  }
}


const styles = {
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
}
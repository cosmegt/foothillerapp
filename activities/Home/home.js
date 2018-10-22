import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Home</Text>

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
import React from 'react';
import { View, Text } from 'react-native';

export default class signInInfinite extends React.Component {
  render() {
    return (
      <View style={styles.Slide}>
          <Text style={styles.Title}>Sign In Infinte Campus</Text>
      </View>
    );
  }
}
const styles = {
    Slide: {
    backgroundColor: '#3fa2d3',
    flex: 1
    },
    Title: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      borderBottomWidth: 3,
      borderBottomColor: '#FFF',
    },
    todo: {
      color: '#FFF',
      fontSize: 22,
  
    },
    subContent: {
      justifyContent: 'center',
      alignContent: 'center',
  
    }
  }

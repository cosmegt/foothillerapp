import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';




export default class ScheduleScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        //flexDirection: 'column',
        justifyContent: 'space-between',

      }}>
          <Text style={styles.Title}>{"\n"}Schedule</Text>
          <Text style={styles2.border}>{"\n"} Period 1: </Text>
          <Text style={styles2.border}>{"\n"} Period 2: </Text>
          <Text style={styles2.border}>{"\n"} Period 3: </Text>
          <Text style={styles2.border}>{"\n"} Period 4: </Text>
          <Text style={styles2.border}>{"\n"} Period 5: </Text>
          <Text style={styles2.border}>{"\n"} Period 6: </Text>
      </View>
        
    );
  }
}


const styles2 = {
  border: {
          flex: .3,
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 20,
          borderColor: '#fff',
          borderWidth: 1
          
  }
}

const styles = {
  Title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    //borderBottomWidth: 3,
   // borderBottomColor: '#FFF',
  },
}

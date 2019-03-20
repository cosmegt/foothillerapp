import React from 'react';
import { View, Text, Button, Alert, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';




export default class SettingsScreen extends React.Component {
  render() {
    // some comment
    return (
      <View>
        
        <View>
          <Text style={styles.Title}>{"\n"} Settings</Text>
        
        
          <TouchableOpacity onPress={() => Alert.alert("Hello")}>
            <Text style={styles.logoutButton}>Logout</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}


const styles = {
  Title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderBottomColor: '#FFF',
  },
  text: {
    color: '#FFF',
    fontSize: 22,

  },
  
  logoutButton: {
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: .5,
    borderRadius: 6,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 10,
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '200%',
  }
}
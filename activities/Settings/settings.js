import React from 'react';
import { View, Text, Button, Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation';




export default class SettingsScreen extends React.Component {
  render() {
    // some comment
    return (
      <View>
        
        <View>
          <Text style={styles.Title}>{"\n"} Settings</Text>
        
        
          <Button
            onPress={() => Alert.alert("Hello")}
            title="Logout"
            accessibilityLabel="Logout of your student assistant account"
            style={styles.logoutButton}
          />
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
  subContent:{
    // flex: .5,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 3,
    // borderColor: '#FFF',
  },
  logoutButton: {
    backgroundColor: '#B22222',
    color: "#FFFFFF"
  }
}
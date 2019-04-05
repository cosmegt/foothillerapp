import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

export default class GradesScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.Title}>{"\n"}Grades</Text>
        </View>
        <TextInput
          style={fontSize=10}
          placeholder="Password"
          onChangeText={(text) => {
              this.setState({text});
              console.log(text);

            } 
          }
          secureTextEntry={true}

        />
        

        
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
  todo: {
    color: '#FFF',
    fontSize: 22,

  },
  subContent: {
    justifyContent: 'center',
    alignContent: 'center',

  }
}
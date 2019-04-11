import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

export default class GradesScreen extends React.Component {
  state = {
    password: ""
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  login = (password) => {
    alert('password: ' + password)
 }
  render() {
    return (
      
      <View>
        <View>
          <Text style={styles.Title}>{"\n"}Grades</Text>
        </View>
        <View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => {
              this.handle.handlePassword;
              console.log(text);

            } 
          }
          secureTextEntry={true}

        />
      </View>
      <View>
        <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login to view Grades </Text>
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
  todo: {
    color: '#FFF',
    fontSize: 22,

  },
  subContent: {
    justifyContent: 'center',
    alignContent: 'center',

  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white'
 }
}
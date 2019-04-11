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
              this.handlePassword(text);

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
// Fetch Application
fetch("http://cozme.tech:69/grades.php", {
  method: "POST",
  headers: new Headers({
    'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
  }),
  body: "username=326237&password=ParkerHG09SD",
})
  .then((response) => response.text())
  .then((responseText) => {
        console.log(responseText);
  })
  .catch((error) => {
      console.log("reset client error-------",error);
  });

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
    borderColor: '#FFFFFF',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'black'
 }
}
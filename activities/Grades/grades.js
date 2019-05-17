import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';


export default class GradesScreen extends React.Component {
  state = {
    password: "",
    logedIn: "",
  }
  
 

 
  render() {
    email = this.props.email
    email = email.substring(0,6);
    
    return (
      <LoginPage id={email}/>
    );
  }
  
}

//This is to LogInForm
const LoginPage = props => {
  // Fetch Application
  // ;
  console.log("id: " + props.id)
  
  state = {
    password: "",
  }
  
  login = (password) => {
    fetch("http://cozme.tech:69/grades.php", {
    method: "POST",
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
    }),
    body: "username="+ email +"&password=" + password,
  })
  
    .then((response) => response.text())
    .then((responseText) => {
          this.props.navigation.navigate('Display')
    })
    .catch((error) => {
        console.log("reset client error-------",error);
    });
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

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
              // handlePassword(text);
              //console.log(text)
            } 
          }
          secureTextEntry={true}

        />
      </View>
      <View>
        <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.LoginPage(this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login to view Grades </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
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
  }
}
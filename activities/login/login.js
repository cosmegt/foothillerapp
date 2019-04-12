import React from "react"
import { StyleSheet, Text, View, Image, Button, TextInput} from "react-native"
import Content from '../content.js';
export {accountName, accountEmail, accountPhoto};



export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: "",
      email:"",
      text: ""
    }
  }
  signIn = async () => {
    try {
      console.log('Starting Async');
      const result = await Expo.Google.logInAsync({
        androidClientId: "279541889821-0jq9s32brq52pv5u9amblv8qpah7d94u.apps.googleusercontent.com",
        iosClientId: "279541889821-0jq9s32brq52pv5u9amblv8qpah7d94u.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      })
      console.log(result);
      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
          email: result.user.email

        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }
  render() {
   return ( 
     <View style={styles.container}>
       

      <View >
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} email={this.state.email}/>
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>

     </View>
      
    )
  }
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Welcome to the Student Assisntant App</Text>
      <Text>please sign in with your school email</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />

      
    </View>
  )
}

const LoggedInPage = props => {
  email = props.email;
  email = email.substring(6,0);
  return (
    <View>
      <Content nameGoogle={props.name} emailGoogle={props.email} photoUrl={props.photoUrl}/>
    </View>
  )

}


const accountName = props => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  )
}
const accountEmail = props => {
  return (
    <View>
      <Text>{props.email}</Text>
    </View>
  )
}
const accountPhoto = props => {
  return (
    <View>
      <Text>{props.photoUrl}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"

  },
  header: {
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center"

  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})
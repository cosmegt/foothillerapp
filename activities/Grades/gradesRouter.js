import React from 'react';
import { View, Text, Alert, Dimensions} from 'react-native';
//import { CheckBox, ListItem, Body, Container, Header, Content } from 'native-base';
import { CheckBox, Button, Header } from 'react-native-elements';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import signInInfinite from './signIn.js';
import GradesDisplay from './grades.js'

const Nav = createStackNavigator({
    signIn: signInInfinite,
    grades: GradesDisplay
  },
  {
    initialRouteName: "signIn"
  });

  const NavCon = createAppContainer(Nav);

export default class GradesScreen extends React.Component {
    render(){
        return  (
          <View style={styles.Slide}>
            <NavCon/>
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
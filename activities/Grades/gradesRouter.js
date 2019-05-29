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
  });

  const NavCon = createAppContainer(Nav);

export default class GradesScreen extends React.Component {
    render(){
        return <NavCon />
        }
}
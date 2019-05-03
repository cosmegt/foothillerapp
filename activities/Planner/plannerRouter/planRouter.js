import React from 'react';
import { View, Text, Alert, Dimensions} from 'react-native';
import { Gradient } from "../../../assets/gradient";
//import { CheckBox, ListItem, Body, Container, Header, Content } from 'native-base';
import { CheckBox, Button, Header } from 'react-native-elements';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import PlannerScreen from "../plannerScreen/planner";
import EventScreen from "../plannerScreen/event"

const Nav = createStackNavigator({
    Plan: PlannerScreen,
    Event: EventScreen
  });
  
  const NavCon = createAppContainer(Nav);
  
  export default class PlanScreen extends React.Component {
    render(){
      return <NavCon />
    }
  }
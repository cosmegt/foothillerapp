import React from 'react';
import { View, Text, Alert, Dimensions} from 'react-native';
import { Gradient } from "../../../assets/gradient";
//import { CheckBox, ListItem, Body, Container, Header, Content } from 'native-base';
import { CheckBox, Button, Header, FormLabel, FormInput } from 'react-native-elements';
import { createAppContainer, createStackNavigator } from 'react-navigation'

export default class EventScreen extends React.Component {
    render(){
      return(
        <View style={styles.Slide}>
          <FormInput>Enter an Event</FormInput>
        </View>
      )
    }
  }

  const styles = {
      Slide:{
        backgroundColor: '#3fa2d3',
        flex: 1
      }
  }
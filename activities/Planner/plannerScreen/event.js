import React from 'react';
import { View, Text, Alert, Dimensions, AsyncStorage} from 'react-native';
import { Gradient } from "../../../assets/gradient";
//import { CheckBox, ListItem, Body, Container, Header, Content } from 'native-base';
import { CheckBox, Button, Header, FormLabel, FormInput } from 'react-native-elements';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Filesystem from 'react-native-filesystem'
import FileSystem from 'react-native-filesystem';

const key = '@MyApp:key'

export default class EventScreen extends React.Component {
  
  render(){
    return(
      <View style={styles.Slide}>
        <FormLabel labelStyle={styles.LabelSty}>Enter an Event</FormLabel>
        <FormInput inputStyle={{color:'#f8f8ff'}}>Event Name</FormInput>

        <Button 
          title="Save"
          buttonStyle={styles.ButtonStyle}
          onPress={() =>
            this.props.navigation.navigate("Plan")
          }
        />
        <Text></Text>
        <Button 
          title="Cancel"
          buttonStyle={styles.ButtonStyle}
          onPress={() =>
            this.props.navigation.navigate("Plan")
          }
        />
      </View>
    )
  }
}

  const styles = {
      Slide:{
        backgroundColor: '#3fa2d3',
        flex: 1
      },
      LabelSty:{
        color: '#f8f8ff', 
        fontSize: 30, 
        textAlign: 'center'
      },
      ButtonStyle:{
        borderRadius: 10,
        backgroundColor: '#196ae5'
      }
  }
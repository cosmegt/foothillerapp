import React from 'react';
import { View, Text, Alert, Dimensions} from 'react-native';
import { Gradient } from "../../../assets/gradient";
//import { CheckBox, ListItem, Body, Container, Header, Content } from 'native-base';
import { CheckBox, Button, Header } from 'react-native-elements';
import { createAppContainer, createStackNavigator } from 'react-navigation'


class PlannerScreen extends React.Component {

  render() {
    let deviceHeight = Dimensions.get('screen').height / 3
    let deviceWidth = Dimensions.get('screen').width / 2
    return (
        <View style={styles.Slide}>
          <Text style={styles.Title}>{"\n"}Planner</Text>
          <Button
            title="Add Event"
            titleStyle={{fontWeight: '700'}}
            buttonStyle={{
              backgroundColor:'#196ae5',
              borderRadius:10,
              bottom:-(Dimensions.get('screen').height-deviceHeight),
              position: 'absolute',
              width: Dimensions.get('screen').width-deviceWidth,
              left: ((Dimensions.get('window').width/2)-((Dimensions.get('window').width-deviceWidth)/2))-10,
            }}
            onPress={() =>
              this.props.navigation.navigate('Event')
            }
          />
        </View>
    );
  }
}


class EventScreen extends React.Component {
  render(){
    return(
      <View>
        <Text>This is a test</Text>
      </View>
    )
  }
}

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


const styles ={
  Slide: {
    backgroundColor: '#3fa2d3',
    flex: 1
  },
  Title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomColor: '#FFF',
    textAlign: 'center',
  },
  Checkbox: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  Text: {
    alignItems: 'center',
    fontSize: 25,
    color: '#fff',
  }
}




 
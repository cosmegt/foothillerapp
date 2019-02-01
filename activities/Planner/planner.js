import React from 'react';
import { View, Text, Alert, Dimensions } from 'react-native';
//import { CheckBox, ListItem, Body, Container, Header, Content } from 'native-base';
import { CheckBox, Button } from 'react-native-elements';
import {createAppContainer, createStackNavigator} from 'react-navigation'

export default class PlannerScreen extends React.Component {

  render() {
    let deviceHeight = Dimensions.get('screen').height / 5
    let deviceWidth = Dimensions.get('screen').width / 2
    return (
      <View>
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
        <Text>Hello</Text>
      </View>
    )
  }
}

const styles ={
  Title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    //borderBottomWidth: 3,
    borderBottomColor: '#FFF',
    textAlign: 'center',
    flex: -1
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
  },
  Button: {

  }
}




// const AppNavigator = createStackNavigator(
//   {
//       Event: {screen: EventScreen},
//       Planner: {screen: PlanerScreen}
//   },
//   {
//       initialRouteName: 'Planner'
//   }
// );

// const Contain = createAppContainer(AppNavigator);


// export default class AppFlowScreen extends React.Component{
//   render() {
//     return <Contain />
//   }
// }
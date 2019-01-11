import React from 'react';
import { View, Text, Alert, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import { CheckBox, ListItem, Body, Container, Header, Content } from 'native-base';
import { CheckBox, Button } from 'react-native-elements'

export default class PlannerScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      checked: false,
    }
  }
  render() {
    let deviceHeight = Dimensions.get('screen').height / 5
    let deviceWidth = Dimensions.get('screen').width / 2
    return (
      <View>
        <Text style={styles.Title}>{"\n"}Planner</Text>
        {/*<CheckBox
          title='Test'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.checked}
          onPress={() => {
            this.setState({checked: !this.state.checked});
          }}
        />*/}
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
          onPress={() => {
            
          }}
        />
      </View>
    );
  }
}

//let deviceHeight = Dimensions.get('sceen').height
//let deviceWidth = Dimensions.get('screen').width

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
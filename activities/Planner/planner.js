import React from 'react';
import { View, Text, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import { CheckBox, ListItem, Body, Container, Header, Content } from 'native-base';
import { CheckBox } from 'react-native-elements'

export default class PlannerScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      checked: false,
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.Title}>{"\n"}Planner</Text>
        <CheckBox
          title='Test'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.checked}
          onPress={() => {
            this.setState({checked: !this.state.checked});
          }}
        />
      </View>
    );
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
  }
}
import React from 'react';
import { View, Text, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { CheckBox } from 'react-native-elements';

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
          style={styles.Checkbox}
          center
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










const styles = {
  Title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderBottomColor: '#FFF',
  },
  Checkbox: {
    
  }
}
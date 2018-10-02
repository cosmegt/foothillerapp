//React Utils
import React from 'react';
import { View, Text } from 'react-native';
//React Addons
import { createStackNavigator } from 'react-navigation';
//Project Activities
import HomeScreen from './activities/Home/home'
import GradesScreen from './activities/Grades/grades';



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Grades: GradesScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
<<<<<<< HEAD
    return (
      <View style={styles.container}>
        <Text>Foothillerapp</Text>
      </View>
    );
=======
    return <RootStack />;
>>>>>>> 6bc52bdb6a051e9f0d5fe0cef63ce1cb623a3814
  }
}

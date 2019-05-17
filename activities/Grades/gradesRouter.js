import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import GradesScreen from "../Grades/grades";
import DisplayScreen from "../Grades/gradesDisplay";

const Nav = createStackNavigator({
    Grades: {screen: GradesScreen } ,
    Display: {screen: DisplayScreen }
  });
  
  const NavCon = createAppContainer(Nav);
  
  export default class GradeScreen extends React.Component {
    render(){
      return <NavCon />
    }
}
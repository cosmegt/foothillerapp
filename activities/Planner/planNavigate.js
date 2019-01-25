import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import EventScreen from './plannerClasses/event';
import PlanerScreen from './planner'

const AppNavigator = createStackNavigator(
    {
        Event: {screen: EventScreen},
        Planner: {screen: PlanerScreen}
    },
    {
        initialRouteName: 'Planner'
    }
);

export default createAppContainer(AppNavigator);
//React Imports
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo';

export default class Gradient extends React.Component{
    render() {
        return (
            <LinearGradient
            colors={[this.props.colorize, 'transparent']}// Yellow
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: 5,
                }}
            />
       );
    }
}

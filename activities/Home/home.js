import React from 'react';
import { View, Text, Image } from 'react-native';
//import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
    };
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year + ' ',
    });
  }
  
  render() {
    // some comment
    return (
      <View>
        <View>
          <Text style={styles.Title}>{"\n"}Cosme Chavez (327137)</Text>
        </View>
        <Swiper style={styles.subContent} showsPagination={false}>
          <View style={styles.subContent}>
            <Image 
              source={require('./schedule.png')}
              style={{
                width: 50,
                height: 50,
                }}>
            </Image>
            
            <Text style={styles.text}>{this.state.date}Today is a Regular Day</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.text}>Your Next Class {"\n"}Math</Text>    
          </View>
        </Swiper>
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
  text: {
    color: '#FFF',
    fontSize: 22,

  },
  subContent:{
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 3,
    // borderColor: '#FFF',
  }
}
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';



export default class GradesScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }
  componentWillMount(){
    this.getGrades();
  }
  getGrades(){
    fetch("http://cozme.tech:69/grades.php", {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body: "username=321701&password=jb021901",
  })
  .then((response) => response.text())
  .then((responseText) => {
    //json = responseText.substring(0);
    //json = JSON.parse(responseText)
    var gradeString = responseText.substring(1, responseText.length - 1)
    //console.log(gradeString);
    gradeString = gradeString.replace(/'/g, '"');
    var gradesFinal = JSON.parse(gradeString);
    console.log('Fetched')
    this.setState({data : gradesFinal }, () => {
      // console.log(this.state.data["Am Govt 1C"]);
      console.log(Object.keys(this.state.data)[0]);
    })
    

    

  })
  .catch((error) => {
      console.log("reset client error-------",error);
  });
  //end of fetch 
  
  }
  renderGrades = () => {
    let gradesRender = [];
    let gradesData = this.state.data;
    let i = 0;
    for(i in Object.keys(gradesData)){
      let Subject = Object.keys(this.state.data)[i];
      let a = 0;
      for(a in this.state.data[Subject]){
        console.log(Subject + " : " + this.state.data[Subject][a])
        // gradesRender.push(<Text>{Object.keys(this.state.data)[i] + " : " }</Text>)
      }
      
    }
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.Title}>{"\n"}Grades:{"\n"}</Text>
          {this.state.data ? 
            <Text style = {styles.grade}> 
            {this.renderGrades()}
  
            </Text> 
          : null}
        </View>
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
  todo: {
    color: '#FFF',
    fontSize: 22,

  },
  subContent: {
    justifyContent: 'center',
    alignContent: 'center',

  },
  grade: {
    color: '#fff',
    fontSize: 25,
    
    

  }
}
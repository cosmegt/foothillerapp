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
    })
  
  
    
  
  })
  .catch((error) => {
      console.log("reset client error-------",error);
  });
  //end of fetch 
  
  }

  renderGrades = () => {
    let Courses = Object.keys(this.state.data)
    let i = 0, a=0, b=[];
    for(i in Courses){
      let Course = Courses[i];
      // console.log(Courses[i] + " : " + this.state.data[Course][0]);
      b.push(<Text>{Courses[i] + " : " + this.state.data[Course][1] + "\n"}</Text>);
    }
    return (
      <Text style = {styles.grade}> {b.map(k => <Text>{k}</Text>)}</Text>
    )
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.Title}>{"\n"}Grades:{"\n"}</Text>
          {this.state.data ? 
            this.renderGrades()
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
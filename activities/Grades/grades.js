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
      console.log(this.state.data["Am Govt 1C"]);
    })
    

    

  })
  .catch((error) => {
      console.log("reset client error-------",error);
  });
  //end of fetch 
  
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.Title}>{"\n"}Grades:{"\n"}</Text>
          {this.state.data ? 
            <Text style = {styles.grade}> 
              Am Govt 1C:{"\n"}{this.state.data["Am Govt 1C"][0]}{"\n"}{this.state.data["Am Govt 1C"][1]}{"\n"}{"\n"}
              Digital Arts 1:{"\n"}{this.state.data["Digital Arts 1"][0]}{"\n"}{this.state.data["Digital Arts 1"][1]}{"\n"}
  
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
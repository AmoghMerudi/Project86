import React from 'react'
import {View, Text} from 'react-native';
import firebase from 'firebase';

export default class LoadingScreen extends React.Component{
  checkIfloggedIn = () => {
    firebase.auth().onAuthStateChanged(User => {
      if(user){
        this.props.navigation.navigate('DashBoard');
      }

      else{
        this.props.navigation.navigate('LogInScreen')
      }
    })
  }

  componentDidMount(){
    this.checkIfloggedIn()
  }
  render(){
    return(
      <View>
          <Text>Loading...</Text>
      </View>
    )
  }
}
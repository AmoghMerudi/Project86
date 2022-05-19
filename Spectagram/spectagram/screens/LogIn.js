import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';

export default class LogInScreen extends React.Component {
   isUser = (googleUser,firebaseUser) => {
    if(firebaseUser){
      var providerData = firebaseUser.providerData;

      for(var i = 0; i<providerData.length; i++){
        if(
          providerData[i].providerId === firebase.auth.GoogleAuthProvider.providerId && 
          providerData[i].uid === googleUser.getBasicProfile.getId ){
            return(true)
        }
      }
    }
  }

  onSignIn = googleUser => {
    var unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      unsubscribe()

      if(!this.isUser(googleUser,firebaseUser)){
        var credential = firebase.auth.google.GoogleAuthProvider.credential(googleUser.idToken, googleUser.accesToken)
        firebase.auth().signInWithCredential(credential).then(function(result){
          firebase.database().ref('users' + result.user.uid).set({
            gmail: result.user.email,
            profilePicture: result.additionalUserInfo.profile.profile.picture,
            firstName: result.additionalUserInfo.profile.givenName,
            lastName: result.additionalUserInfo.profile.givenName,
            currentTheme: 'dark'
          })
          .then(function(snapshot){})
        })
      }
      else{
      console.log('USer already signed in')
     }
    })
    .catch(error=>{
      var errorCode = error.code
      var errorMessage = error.message
      var email = error.email
      var credential = error.credential
    })    
  }

  render(){
    return(
      <View>
          <Text>LogInScreen</Text>
          <Image  source = {require('../assets/logo.png')} style = {{width: 50, height: 50}}/>
          <TouchableOpacity>
                <Image  source = {require('../assets/profile_img.png')} style = {{width: 50, height: 50}}/>
          </TouchableOpacity>
      </View>
    )
  }
}

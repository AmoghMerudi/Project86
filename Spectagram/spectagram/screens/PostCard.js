import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar, SafeAreaView, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostCard extends React.Component{
    render(){
        return(
           <View style = {styles.container}>
               <View style = {styles.cardContainer}>
                  <View style = {styles.authorContainer}>
                      <View styles = {styles.authorImageContainer}>
                          <Image>
                              source = {require('../assets/profile_img.png')}
                              styles = {styles.profileImage}
                          </Image>
                      </View>
                      <View styles = {styles.authorNameContainer}>
                          <Text style = {styles.authorNameText}>{this.props.post.author}</Text>
                      </View>
                  </View>
                  <Image source = {require('../assets/post.jpeg')} style = {styles.postImage}/>
                  <View style = {styles.captionContainer}>
                      <Text style = {styles.captionText}>
                          {this.props.post.caption}
                      </Text>
                  </View>
                  <View styles = {styles.actionContainer}> 
                      <View style = {styles.likeButton}>
                          <Ionicons name = {'heart'} size = {RFValue(30)} color = {'white'}/>
                          <Text style = {styles.likeText}>12k</Text>
                      </View>
                  </View>
               </View>
           </View>
        )
    }
}
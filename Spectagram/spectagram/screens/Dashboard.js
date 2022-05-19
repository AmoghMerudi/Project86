import React, { Component } from "react";
import { Text, View } from 'react-native';
import { Component } from 'react';

export default class DashBoard extends React.Component{
    render(){
        return(
            <View
                style = {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text>DashBoard</Text>
            </View>
        )
    }
}
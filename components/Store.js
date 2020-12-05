import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Store extends Component {
    
    constructor(){
      super()
      this.state ={
        title : "",
        note : ""
    }
    this.koy ={
      keys:"",
      keysget:"",
    }
    }


    
print = async() => {
  try {
           this.koy.keys=({keys: await AsyncStorage.getAllKeys()})
           this.koy.keysget=({keysget: JSON.stringify(this.koy.keys)}) 
          // console.log(this.koy.keysget);
          var keys = this.koy.keys
          console.log(keys)
          console.log(Object.keys())
          // var dekeys = 
        } catch (e) {
          alert("Failed to load data !!")
        }

}
    
    
   

    render(){
        return (
            <View>
                <Text>{this.state.title}</Text>
                <Button onPress={this.print}  title="press me" ></Button>
            </View>
        )
    }
}

export default Store;
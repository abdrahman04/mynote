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
          // var dekeys = keys.keys;
          // var numkey = Object.keys(dekeys).length;
          // console.log(numkey)
           
        } catch (e) {
          alert("Failed to load data !!")
        }
        // var i ;
        // for(i = 0 ; i < numkey; i++){
        //   // console.log(dekeys[i]);
        //   const getitem = await AsyncStorage.getItem(dekeys[i]);
        //   var tragetitem = JSON.parse(getitem)
        //   // console.log(tragetitem)
        //   // console.log(tragetitem.title)
        //   // console.log(tragetitem.note)
        //   var showtitle = tragetitem.title;
        //   var shownote = tragetitem.note;
          
        //   // this.setState({title: showtitle, note: shownote})
         
          
        // }

        keys.keys.forEach(async (element) => {
          const getitem =await  AsyncStorage.getItem(element);
          // console.log(getitem)
          var tragetitem = JSON.parse(getitem)
          // console.log(tragetitem)
          console.log(tragetitem.title)
          console.log(tragetitem.note)
          var showtitle = tragetitem.title;
          var shownote = tragetitem.note;

        });

}
    
    
   

    render(){
        return (
            <View>
                <Text>{this.state.title}</Text>
                <Text>{this.state.note}</Text>
                <Button onPress={this.print}  title="press me" ></Button>
            </View>
        )
    }
}

export default Store;
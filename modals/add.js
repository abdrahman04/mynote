import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';


export default function Add() {
const [titleinput, setTitleInput]  = useState();
const [noteinput, setNoteInput]  = useState();


const everyitem = {
  title: titleinput,
  note: noteinput,
}

  const saveitem = async () => {
    try {
      const jsonValue = JSON.stringify(everyitem);
      await AsyncStorage.setItem(titleinput, jsonValue)
      console.log("data saved")
      
    } catch (e) {
      // saving error
      alert("faild to save data")
      
    }
  }

  // const load = async () => {
    
  //   try {
  //    const data = await AsyncStorage.getItem("ItemsKey")
  //   console.log(data)
  // } catch(e) {
  //   // error reading value
  // }
  
  // } 
  

  // useEffect(() => {
  //   load()
  // }, [])

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Title" onChangeText={text => setTitleInput(text)}  ></TextInput>
      <View style={styles.textArea} >
      <TextInput style={styles.inputarea} placeholder="Write your note" multiline = {true}
numberOfLines = {10} underlineColorAndroid="transparent" onChangeText={text => setNoteInput(text)}  ></TextInput></View>
     <TouchableOpacity style={styles.savebutton} onPress={saveitem} >
     <MaterialIcons name="done" size={32} color="white" />
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  input:{
   height: 50,
   backgroundColor:"#f1f1f1a6",
   borderRadius: 5,
   padding:10,
   color:"black",
   marginBottom: 20,
  },
  inputarea:{
    justifyContent: "flex-start",
    height: 450,
   backgroundColor:"#f1f1f1a6",
   borderRadius: 5,
   padding:10,
   color:"black",
   textAlignVertical: 'top'
  },
  savebutton:{
    backgroundColor: "#FFC300",
    padding: 15,
    borderRadius: 50,
    width: 60,
    marginTop: 140,
    marginHorizontal: 290,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  colsemodal:{
    marginLeft:20,
  
  },

 
});

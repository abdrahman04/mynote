import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function Add() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Title"  ></TextInput>
      <View style={styles.textArea} >
      <TextInput style={styles.inputarea} placeholder="Title" multiline = {true}
numberOfLines = {10} underlineColorAndroid="transparent" ></TextInput></View>
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

 
});

// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Slider } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const [setting, setsetting]= useState(false);
    const modalshow = () => {
        if (setting == false){
             setsetting(true);
        }else if(setting == true){
            setsetting(false);
        }
        
    }
    return (
      <View style={styles.container}>
        <View style={styles.title}>
        <Text style={styles.titletext}><Text style={styles.span}>My</Text> note</Text>
        </View>
        <TouchableOpacity onPress={modalshow}>
       
        <Entypo name="dots-three-vertical" style={styles.settings} size={22} color="black" />
        
        </TouchableOpacity>
        <Modal visible={setting} animationType={"slide"}>
            <View style={styles.modalHeader}>
                <View>
        <Ionicons name="ios-arrow-round-back" size={42} style={styles.colsemodal} color="black" onPress={modalshow}/></View>
        <View ><Text style={styles.settitle}>settings</Text></View>
        </View>
        </Modal>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      
    },
    title: {
        marginStart: 120,
        
    },
    titletext:{
        fontSize:28,
        fontWeight: "bold",
        color: "black",
    },
    span:{
        color: "#FFD000",
    },
    settings:{
        marginLeft: 110,
        marginTop: 10,
    },
    colsemodal:{
        marginLeft:20,
    },
    modalHeader:{
        flexDirection: 'row',
        marginTop: 5,
    },
    settitle:{
        marginTop:5,
        fontWeight:"bold",
        fontSize: 26,
        marginLeft:110,
    }
  });
// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Anchor from './link';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function Header() {
    const [setting, setsetting]= useState(false);
    const modalshow = () => {
        if (setting == false){
             setsetting(true);
        }else if(setting == true){
            setsetting(false);
        }
        
    }
    const [aboutModal, setaboutModal]= useState(false)
    const abModal = () => {
        if (aboutModal == false){
            setaboutModal(true);
       }else if(aboutModal == true){
           setaboutModal(false);
       }
    }
    const [versionModal, setversionModal]= useState(false)
    const showversionModal = () => {
        if (versionModal== false){
            setversionModal(true);
       }else if(versionModal == true){
        setversionModal(false);
       }
    }

    const [commentModal, setcommentModal]= useState(false)
    const showcommentModal = () => {
        if (commentModal== false){
            setcommentModal(true);
       }else if(commentModal == true){
        setcommentModal(false);
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
        <View>
            <TouchableOpacity onPress={abModal}>
                <Text style={styles.settingItem} >About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={showversionModal}>
                <Text style={styles.settingItem} >Version</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={showcommentModal}>
                <Text style={styles.settingItem} >Comments</Text>
            </TouchableOpacity>
            <Modal visible={aboutModal} animationType={"fade"} transparent={true}>
                <View style={styles.centerModal}>
                    <View style={styles.modalst} >
                        <Text style={{fontSize: 26, fontWeight: "bold",}} >About</Text>
                    <Text style={{marginBottom: 20,textAlign: "center", }}>This application was build by Abdrahman Badou for more information visit our website. </Text>
                    <Anchor href="https://abdrahmanbadou-14cc8.web.app/" style={styles.link}>
                        <View style={{flexDirection: "row", margin: 25, borderColor: "#e5e5e5",borderWidth: 1, padding: 10,borderRadius: 20,}}>
                        <MaterialCommunityIcons name="web" size={24} color="black" />
                        <Text style={{fontSize: 20, marginRight: 10,}}>  Go to my website</Text>
                        </View>
                        </Anchor>
                        <Anchor href="https://www.instagram.com/abdrahmanbadou/" style={styles.link}>
                        <View style={{flexDirection: "row", margin: 25, borderColor: "#e5e5e5",borderWidth: 1, padding: 10,borderRadius: 20,}}>
                        <FontAwesome name="instagram" size={24} color="black" />
                        <Text style={{fontSize: 20,}}>  Follow me on insta</Text>
                        </View>
                        </Anchor>
                        <Anchor href="https://github.com/abdrahman04" style={styles.link}>
                        <View style={{flexDirection: "row", margin: 25, borderColor: "#e5e5e5",borderWidth: 1, padding: 10,borderRadius: 20,}}>
                        <EvilIcons name="sc-github" size={40} color="black" />
                        <Text style={{fontSize: 20,}}>   visit my  github </Text>
                        </View>
                        </Anchor>
                        <TouchableOpacity onPress={abModal} >
                            <Text style={{fontSize: 24, marginLeft: 210, marginTop: 15,}}>OK</Text>
                        </TouchableOpacity>

                </View>
                </View>
            </Modal>
            <Modal visible={versionModal} animationType={"fade"} transparent={true}>
                <View style={styles.centerModal}>
                    <View style={styles.modalst}>
                    <Text style={{fontSize: 26, fontWeight: "bold",}}>Version</Text>
                    <Text><Text style={{color: "red"}}>Beta</Text> V1.0.0</Text>
                    <Text style={{fontSize: 17, textAlign: "center",marginTop: 15,}}>This application still in <Text style={{color: "red"}}>Beta</Text> version.</Text>
                    <TouchableOpacity onPress={showversionModal} >
                            <Text style={{fontSize: 24, marginLeft: 210, marginTop: 15,}}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal visible={commentModal} animationType={"slide"}>
            <Ionicons name="ios-arrow-round-back" size={42} style={styles.colsemodal} color="black" onPress={showcommentModal}/>
            <View style={{margin: 20,}}>
                <Text style={{fontSize: 20,}}>  Name:</Text>
                <TextInput placeholder="Enter your name" placeholderTextColor="#000" style={{backgroundColor: "#e5e5e5", padding: 20, width: 350,borderRadius: 10,}}/>
                <Text style={{fontSize: 20,marginTop: 20,}}>  Comment:</Text>
                <TextInput placeholder="Write tou note" placeholderTextColor="#000" style={{backgroundColor: "#e5e5e5", padding: 20, width: 350,borderRadius: 10,}} />
                <TouchableOpacity onPress={() => {alert("Thank you for the comment !"); setcommentModal(false)}} ><Text style={{marginLeft: 270, fontSize: 20,borderWidth: 1, borderColor: "#e5e5e5",marginTop: 10,padding:15,borderRadius: 10,}}>Send</Text></TouchableOpacity>
            </View>
            </Modal>
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
    },
    settingItem: {
        marginStart: 20,
        fontSize: 23,
        fontWeight: "bold",
        marginTop: 10,
        borderBottomWidth: 1,
        marginEnd: 10,
        padding: 6,
        borderColor: "#e5e5e5",
    },
    centerModal: {
        flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
    },
    modalst:{
        margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
    },
    link:{
        padding: 5,
    }
  });
import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Modal, TouchableOpacity } from 'react-native';
import Header from './components/header';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Add from './modals/add'

export default function App() {
const [addModal, setaddModal] = useState(false);
const showModal = () =>{
  if(addModal == false){
    setaddModal(true);
  }else if (addModal == true){
    setaddModal(false)
  }
}
  
  return (
    <View style={styles.container}>
      <Header />
      <View>
      <ScrollView>
        <Text>main</Text>
        </ScrollView>
        </View>
        <Modal visible={addModal} animationType={"slide"} >
        <Ionicons name="ios-arrow-round-back" size={42} style={styles.colsemodal} color="black" onPress={showModal}/>
          <Add />
        </Modal>
        
        
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.adde}  onPress={showModal}  ><AntDesign name="plus" size={29} color="white" /></TouchableOpacity>
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
//   add:{
//     backgroundColor: "#FFC300",
//     marginLeft:280,
//     marginTop: 720,
//     position: "absolute",
//     padding: 20,
//     borderRadius: 50,
//     shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 2,
// },
// shadowOpacity: 0.25,
// shadowRadius: 3.84,

// elevation: 5,
  // },
  adde:{
    backgroundColor: "#FFC300",
    padding: 20,
    borderRadius: 50,
    // position: "absolute",
    // height: 100,
    // marginLeft:280,
    marginTop: 650,
    width: 70,
    marginHorizontal: 280,
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

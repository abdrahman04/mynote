import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, TouchableOpacity } from 'react-native';
import Header from './components/header';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Add from './modals/add';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Store from './components/Store';

export default function App() {
const [addModal, setaddModal] = useState(false);
const showModal = () =>{
  if(addModal == false){
    setaddModal(true);
  }else if (addModal == true){
    setaddModal(false)
  }
}
// var routcom = {
//    Disp :"Disp"
// }


// var keys ;
//   const print = async () => {
//     try {
//        keys = await AsyncStorage.getAllKeys();
//        keys = JSON.stringify(keys)

//     } catch (e) {
//       alert("errrr")
//     }
//     console.log(keys)
//     var keymo = JSON.parse(keys)
//   var keylen =  Object.keys(keymo).length;
//   // console.log(keylen)

//   var i = 0;

//   var showtitle;
//   var shownote;
//   while(i < keylen ){
//     // console.log(keymo[i]);
//     const getitem = await AsyncStorage.getItem(keymo[i]);
//     var tragetitem = JSON.parse(getitem)
//     // console.log(tragetitem)
//     // console.log(tragetitem.title)
//     // console.log(tragetitem.note)
//      showtitle = tragetitem.title;
//      shownote = tragetitem.note
//      i++;
     
// }






// // console.log(shownote)
//   }

//   print(keys)
// //   // console.log(element)

  return (
    <View style={styles.container}>
      <Header />
      <View>
      <ScrollView>
       <View>
         <Store/>
       </View>
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
  adde:{
    backgroundColor: "#FFC300",
    padding: 20,
    borderRadius: 50,
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

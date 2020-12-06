import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, TouchableOpacity, FlatList } from 'react-native';
import Header from './components/header';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Add from './modals/add';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';

export default function App() {
const [addModal, setaddModal] = useState(false);
const showModal = () =>{
  if(addModal == false){
    setaddModal(true);
  }else if (addModal == true){
    setaddModal(false)
  }
}



var keys ;
var Items = [{note: "this is your note !!", title:"this is your note !!"}];
  const print = async () => {
    try {
       keys = await AsyncStorage.getAllKeys();
       keys = JSON.stringify(keys)
    } catch (e) {
      alert("errrr")
    }
    // console.log(keys)
    var keymo = JSON.parse(keys)
  var keylen =  Object.keys(keymo).length;
  // console.log(keylen)



  keymo.forEach(async (element) => {
    // console.log(element)
    const getitem =await  AsyncStorage.getItem(element);
    // console.log(getitem)
    var tragetitem = JSON.parse(getitem)
    // console.log(tragetitem)
    // console.log(tragetitem.title)
    // console.log(tragetitem.note)
    var showtitle = tragetitem.title;
    var shownote = tragetitem.note;

    var itemo = {
      title: showtitle,
      note: shownote
    }
    // console.log(itemo)
    Items.push(itemo)
    // console.log(Items)
  });

  

  







  }

  useEffect(() => {
     print(keys)
  }, [])

  // console.log(Items)
  // print(keys)
  // console.log(Items)
  
  const Item = ({ title, details }) =>{ 
    const [detModal, setdetModal] = useState(false)
    // console.log(title)
    const removeitem = async(title) => {
      console.log(title)
      try{
        await AsyncStorage.removeItem(title);
        setdetModal(false);
      }catch {
        alert("can't remove Note Try later")
      }
    }
    return(
    <View>
    <TouchableOpacity onPress={() => setdetModal(true)} >
    <View style={styles.firstitem} >
      <Text style={styles.title} >{title}</Text>
    </View>
    </TouchableOpacity>

    <Modal visible={detModal} animationType={"slide"}>
      <View style={styles.headermodal}>
    <Ionicons name="ios-arrow-round-back" size={42} style={styles.colsemodal} color="black" onPress={()=>  setdetModal(false)}/>
    <Feather name="trash" size={28} color="black" style={styles.trashs} onPress={() => removeitem(title)}  />
    </View>
  <Text style={styles.tiledet} >{title}</Text>
  <Text style={styles.detnote}>{details}</Text>
    </Modal>
    </View>
  )} ;
    
  

const renderItem = ({item}) =>{
  //  console.log(item.title)
  return(<Item title={item.title}  details={item.note}  />)} ;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.flatList}>
      
       <FlatList
       data={Items} renderItem={renderItem} keyExtractor={ item => item.title} />
        
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
    marginTop: 18,
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
  flatList: {
    height: 650,
    marginTop: 15,
  },
  firstitem: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tiledet: {
    fontSize: 25,
    fontWeight: "bold",
    marginStart: 15,
  },
  detnote: {
    marginTop: 10,
    fontSize: 17,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#e5e5e5",
    padding: 10,
    
  },
  headermodal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  trashs: {
    margin: 10,
  }
});

import React,{useContext, useState}from "react";
import {FormDataContext} from "./UseContext"
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
export default function User({navigation}){
    const {formData,setFormData}=useContext(FormDataContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
   
    return(
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome to Opulent Plates</Text>
                <Text style={{color:"#fdf0d5", marginTop:70}}>A taste of majesty</Text>
            </View>
            <TextInput placeholder="Enter Name" value={name} onChangeText={setName} style={styles.input}></TextInput>
            <TextInput  value={email} onChangeText={setEmail} style={styles.input} placeholder="Email"></TextInput>
            <TextInput value={phone} onChangeText={setPhone}style={styles.input} placeholder="Phone Number"></TextInput>
            <Button title="Address details"   onPress={() => {
    setFormData({
      ...formData,
      userDetails: { name, email, phone },
    });
    navigation.navigate('AddressDetails');
  }}/>
        </View>
    )
}
const styles=StyleSheet.create({
    conatiner:{
    flex:1,
    backgroundColor:"eae2b7"
},
header:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    backgroundColor:"#d62828",
    alignItems:"center"
},
headerText:{
    fontSize:25,
    fontWeight:"bold",
    color:"#fdf0d5",
    marginTop:50,
    marginBottom:20
},
    input:{
        borderWidth:2,
        borderColor:"black",
        borderRadius:2,
        fontSize:20,
        marginTop:10,
        marginBottom:5
    }

})

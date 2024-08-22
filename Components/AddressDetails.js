import { Button, Text, View, TextInput, StyleSheet} from "react-native";
import {FormDataContext} from "./UseContext"
import React,{useState,useContext}from "react"
export default function Address({navigation})
{
    const { formData, setFormData } = useContext(FormDataContext);
    const [city, setCity] = useState('');
    const [state,setState] = useState('');
    const [zip, setZip] = useState('');
    return(

            <View style={styles.conatiner}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome to Opulent Plates</Text>
                <Text style={{color:"#fdf0d5", marginTop:70}}>A taste of majesty</Text>
            </View>
            <TextInput value={city} onChangeText={setCity} style={styles.input}placeholder="Enter City"></TextInput>
            <TextInput value={state} onChangeText={setState} style={styles.input} placeholder="Enter State"></TextInput>
            <TextInput value={zip} onChangeText={setZip}style={styles.input} placeholder="Enter Zip Code"></TextInput>
            <Button title="Card Details"   onPress={() => {
                    setFormData({
                        ...formData,
                        addressDetails: { city, state, zip },
                    });
                    navigation.navigate('Payment');
                }}
            />
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
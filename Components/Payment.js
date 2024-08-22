import { Button, TextInput,Text, View ,StyleSheet} from "react-native";
import {FormDataContext} from "./UseContext"
import React,{useContext,useState} from "react"
export default function Payment({navigation}){
    const { formData, setFormData } = useContext(FormDataContext);
    const [cardnum, setCardnum] = useState('');
    const [expdate, setExpdate] = useState('');
    const [cvv, setCvv] = useState('');

    return(
        <View style={styles.conatiner}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Welcome to Opulent Plates</Text>
            <Text style={{color:"#fdf0d5", marginTop:70}}>A taste of majesty</Text>
        </View>
        <TextInput value={cardnum} onChangeText={setCardnum}style={styles.input}placeholder="Enter Card Number"></TextInput>
        <TextInput value={expdate} onChangeText={setExpdate}style={styles.input} placeholder="Enter Card Expiration Date"></TextInput>
        <TextInput value={cvv} onChangeText={setCvv}style={styles.input} placeholder="Enter Card CVV Number"></TextInput>
        <Button title="Go to Menu"   onPress={() => {
                    setFormData({
                        ...formData,
                        paymentDetails: { cardnum, expdate, cvv },
                    });
                    navigation.navigate('Home');
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
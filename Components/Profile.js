import { Text, View, StyleSheet} from "react-native";
import {FormDataContext} from "./UseContext"
import React,{useContext} from "react";
export default function Profile(){
    const { formData } = useContext(FormDataContext);
    return(
        <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Profile Information</Text>
        </View>
        <View style={styles.profileContent}>
          <Text style={styles.title}>Name: {formData.userDetails.name}</Text>
          <Text style={styles.description}>Email: {formData.userDetails.email}</Text>
          <Text style={styles.description}>Phone: {formData.userDetails.phone}</Text>
          <Text style={styles.description}>Street: {formData.addressDetails.street}</Text>
          <Text style={styles.description}>City: {formData.addressDetails.city}</Text>
          <Text style={styles.description}>Postal Code: {formData.addressDetails.postalCode}</Text>
          <Text style={styles.description}>Card Number: {formData.paymentDetails.cardNumber}</Text>
          <Text style={styles.description}>Expiry Date: {formData.paymentDetails.expiryDate}</Text>
          <Text style={styles.description}>CVV: {formData.paymentDetails.cvv}</Text>
          </View>
          </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: "#d62828",
      alignItems: "center",
      padding: 10,
    },
    headerText: {
      fontSize: 25,
      fontWeight: "bold",
      color: "#fdf0d5", 
      marginTop: 20,
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      textAlign: "left",
    },
    description: {
      fontSize: 18,
      marginBottom: 10,
      textAlign: "left",
    },
  });
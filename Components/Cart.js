import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';

export default function Cart({ cartItems, removeItemFromCart, totalAmount }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
      <Button 
        title="Remove from Cart" 
        onPress={() => removeItemFromCart(item.id)} 
        
      />
    </View>
  );
  const Checkout = () => {
  
    Alert.alert(
      'Checkout',
      'Your order has been placed!',
      [
        {
          text: 'OK',
          onPress: () => {
            clearCart();
          },
        },
      ],
    )};
  return (
    <View style={styles.container}>
        <View style={styles.header}>
      <Text style={styles.headerText}>Opulent Plates Order Process</Text>
      </View>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text style={styles.total}>Total: R{totalAmount.toFixed(2)}</Text>
    <Button title="Check Out" onPress={Checkout}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        backgroundColor:"#d62828",
        alignItems:"center"
    },
      itemContainer: {
        marginBottom: 20,
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
      },
      price: {
        fontSize: 18,
        color: "#000",
      },
      total: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30,},
        headerText:{
            fontSize:25,
            fontWeight:"bold",
            color:"#fdf0d5",
            marginTop:50,
            marginBottom:20
        },
});

import * as React from 'react';
import { useState } from 'react';
import Cart from './Cart'
import Menu from './Menu'
import Profile from './Profile'
import AntDesign from "react-native-vector-icons/AntDesign"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native';
const nav=createBottomTabNavigator()


export default function Nav(){
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
      setCartItems([...cartItems, item]);
    };
  
    const removeItemFromCart = (id) => {
      setCartItems(cartItems.filter(item => item.id !== id));
    };
    clearCart = () => {
        setCartItems([])};
  
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
    return(
    <nav.Navigator screenOptions={{headerShown:false}}>
    <nav.Screen name="Menu"  options={{
        tabBarIcon:({focus})=>{
            return(
            <View style={{alignItems:"center", justifyContent:"center"}}>
                <AntDesign name="home" size={14} color={focus?"#16247d":"111"}/>
            </View>)
        }
    }
    }>
         {() => <Menu addItemToCart={addItemToCart} />}
    </nav.Screen>
    <nav.Screen name="Cart" options={{
                tabBarIcon:({focus})=>{
                    return(
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        <AntDesign name="shoppingcart" size={14} color={focus?"#16247d":"111"}/>
                    </View>)
                }    
    }}>
          {() => (
                    <Cart 
                        cartItems={cartItems} 
                        removeItemFromCart={removeItemFromCart} 
                        totalAmount={totalAmount} 
                        clearCart={clearCart}
                    />
                )}
    </nav.Screen>
    <nav.Screen name="Profile" component={Profile} options={{
             tabBarIcon:({focus})=>{
                return(
                <View style={{alignItems:"center", justifyContent:"center"}}>
                    <AntDesign name="profile" size={14} color={focus?"#16247d":"111"}/>
                </View>)}
    }}/>
    </nav.Navigator>

)
}
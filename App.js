import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './Components/Navigation';
import Stack from './Components/Stacknav';
import { useState } from 'react';
export default function App() {
  const [Done,setDone]=useState()
  return (
   <NavigationContainer>
    {Done ? (<Nav/>)
    :
    (<Stack Done={setDone}/>)}
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import {createStackNavigator} from "@react-navigation/stack"
import User from "./UserDetails"
import Address from "./AddressDetails"
import Payment from "./Payment"
import Nav from "./Navigation"
import { FormDataProvider } from "./UseContext"

const Stacknav=createStackNavigator()
export default function Stack({setDone}){
    return(
      <FormDataProvider>
        <Stacknav.Navigator>
        <Stacknav.Screen name="UserDetails">
        {props=><User{...props} Done={setDone}/>} 
        </Stacknav.Screen>
        <Stacknav.Screen name="AddressDetails" component={Address} />
        <Stacknav.Screen name="Payment" component={Payment} />
        <Stacknav.Screen name="Home" component={Nav} options={{headerShown:false}}/>
      </Stacknav.Navigator>
      </FormDataProvider>
    )
}
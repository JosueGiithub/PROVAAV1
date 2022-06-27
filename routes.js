import React from 'react'
import Home from './Views/Home'
import SócioVozão from './Views/SócioVozão'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import GE from './Views/GE';
import Menu from './Views/Menu';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel:false,
            headerShown:false,
        }}>
            <Tab.Screen name="Inicio" component={Home} options={{tabBarIcon:({color, size})=> (
                <Ionicons name='home' color={color} size={size} />
            )}}/>
            <Tab.Screen name='SócioVozão' component={SócioVozão} options={{tabBarIcon:({color, size})=> (
                <Ionicons name='ios-eye-outline' color={color} size={size} />
            )}}/>
            <Tab.Screen name='GE' component={GE}  options={{tabBarIcon:({color, size})=> (
                <Feather name='grid' color={color} size={size} />
            )}}/>
            <Tab.Screen name='Menu' component={Menu} options={{tabBarIcon:({color, size})=> (
                <Ionicons name='menu-sharp' color={color} size={size} />
            )}}/>
        </Tab.Navigator>
    )
}
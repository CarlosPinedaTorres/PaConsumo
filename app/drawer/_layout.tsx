import { Pressable, Alert } from 'react-native'
import {Drawer} from 'expo-router/drawer'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/themes/Colors'
import GlobalStyles from '../../themes/GlobalStyles';
import { getAuth } from 'firebase/auth'
import { router } from 'expo-router'

const _layout = () => {

  getAuth().onAuthStateChanged((user) => {
    if(!user) router.replace("/drawer/Administrador");
  });

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.negro,
      
    headerTitleStyle: GlobalStyles.textoCabecera, tabBarLabelStyle: {height: 80}, headerStyle: {backgroundColor: Colors.azulClaro, height: 60}, tabBarInactiveTintColor: Colors.azulOscuro, tabBarStyle: {backgroundColor: Colors.azulClaro, height:60} }}>
    <Tabs.Screen
      name="index"
      options={{
        title:'PaConsumo',
        tabBarLabelStyle: GlobalStyles.textoCabeceraTab,
        tabBarIcon: ({ color }) => <Ionicons style={{marginLeft: 0}} size={22} name="home-outline" color={Colors.fondo} />,
      }}
    />
 

<Tabs.Screen
      name="Administrador"
      options={{
        title: 'Administrador',
        
        tabBarLabelStyle: GlobalStyles.textoCabeceraTab,
        tabBarIcon: ({ color }) => <Ionicons size={22} name="bug-outline" color={Colors.fondo} />,
      }}
    />


    
  </Tabs>

   
  )
}

export default _layout
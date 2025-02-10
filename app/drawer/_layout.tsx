import { View, Text } from 'react-native'
import {Drawer} from 'expo-router/drawer'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/themes/Colors'



const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.negro  ,tabBarInactiveTintColor: Colors.azulOscuro, tabBarStyle: {backgroundColor: Colors.azulClaro} }}>
      <Tabs.Screen
        name="index"
        options={{
          title:'Pagina Principal',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="film-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Historicos/index"
        options={{
          title: 'Historicos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="construct-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Configuracion"
        options={{
          title: 'Configuracion',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="construct-outline" color={color} />,
        }}
      />
      
    </Tabs>

   
  )
}

export default _layout
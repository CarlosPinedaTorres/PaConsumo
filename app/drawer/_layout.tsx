import { View, Text } from 'react-native'
import {Drawer} from 'expo-router/drawer'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'


const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#2B9EB3", tabBarInactiveTintColor: "#2B9EB3", tabBarStyle: {backgroundColor: "#2B9EB3"} }}>
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
import { View, Text } from 'react-native'
import {Drawer} from 'expo-router/drawer'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/themes/Colors'
import GlobalStyles from '../../themes/GlobalStyles';

const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.negro, headerTitleStyle: GlobalStyles.textoCabeceraTab, headerStyle: {backgroundColor: Colors.azulClaro, height: 50}, tabBarInactiveTintColor: Colors.azulOscuro, tabBarStyle: {backgroundColor: Colors.azulClaro} }}>
    <Tabs.Screen
      name="index"
      options={{
        title:'Pagina Principal',
        tabBarLabelStyle: GlobalStyles.textoCabeceraTab,
        tabBarIcon: ({ color }) => <Ionicons style={{marginLeft: 10}} size={22} name="home-outline" color={color} />,
      }}
    />
 
    <Tabs.Screen
      name="Configuracion"
      options={{
        title: 'Configuracion',
        tabBarLabelStyle: GlobalStyles.textoCabeceraTab,
        tabBarIcon: ({ color }) => <Ionicons size={22} name="settings-outline" color={color} />,
      }}
    />

<Tabs.Screen
      name="Administrador"
      options={{
        title: 'Administrador',
        tabBarLabelStyle: GlobalStyles.textoCabeceraTab,
        tabBarIcon: ({ color }) => <Ionicons size={22} name="bug-outline" color={color} />,
      }}
    />

<Tabs.Screen
      name="Historicos/index"
      options={{
        title: 'Historicos',
        tabBarLabelStyle: GlobalStyles.textoCabeceraTab,
        tabBarIcon: ({ color }) => <Ionicons size={22} name="document-outline" color={color} />,
      }}
    />
    
  </Tabs>

   
  )
}

export default _layout
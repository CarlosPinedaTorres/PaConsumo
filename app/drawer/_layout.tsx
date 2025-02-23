import { Pressable } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import React, { useState, useEffect } from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/themes/Colors';
import GlobalStyles from '../../themes/GlobalStyles';
import { getAuth, User, signOut } from 'firebase/auth';
import { router } from 'expo-router';

const _layout = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((authUser) => {
      setUser(authUser);
      if (!authUser) router.replace('/drawer/Administrador');
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(getAuth());
      router.replace('/drawer/Administrador');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.negro,
        headerTitleStyle: GlobalStyles.textoCabecera,
        tabBarLabelStyle: { height: 80 },
        headerStyle: { backgroundColor: Colors.azulClaro, height: 60 },
        tabBarInactiveTintColor: Colors.azulOscuro,
        tabBarStyle: { backgroundColor: Colors.azulClaro, height: 60 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'PaConsumo',
          tabBarLabelStyle: GlobalStyles.textoCabeceraTab,
          tabBarIcon: ({ color }) => (
            <Ionicons size={22} name="home-outline" color={Colors.fondo} />
          ),
        }}
      />

      <Tabs.Screen
        name="Administrador"
        options={{
          title: 'Administrador',
          tabBarLabelStyle: GlobalStyles.textoCabeceraTab,
          tabBarIcon: ({ color }) => (
            <Ionicons size={22} name="bug-outline" color={Colors.fondo} />
          ),
          headerRight: () => (
            user && (
              <Pressable onPress={handleSignOut}>
                <Ionicons
                  name="log-out-outline"
                  size={30}
                  color={Colors.fondo}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            )
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

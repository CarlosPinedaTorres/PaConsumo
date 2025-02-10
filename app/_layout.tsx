import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { Slot } from "expo-router";
import React from "react";
import {useFonts} from "expo-font"
export default function RootLayout() {

  const [loaded] = useFonts({
    InterBold: require('../assets/fonts/InterBold.ttf'),
  })
  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
}
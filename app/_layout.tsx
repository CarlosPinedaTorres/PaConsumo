import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { Slot } from "expo-router";
import React from "react";
import {useFonts} from "expo-font"
export default function RootLayout() {

  const [loaded] = useFonts({
    InterBold: require('../assets/fonts/InterBold.ttf'),
    InterRegular : require('../assets/fonts/Inter_18pt-Regular.ttf'),
    InterBolder : require('../assets/fonts/Inter_18pt-Bold.ttf'),
    InterExtraBolder : require('../assets/fonts/Inter_18pt-ExtraBold.ttf'),
  })
  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
}
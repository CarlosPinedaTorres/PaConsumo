import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { Slot } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
}
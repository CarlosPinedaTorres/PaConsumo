import { View } from 'react-native';
import { GlobalStyles } from "../../themes/GlobalStyles";
import { TextInput } from "react-native-gesture-handler";
import React from 'react';
import { Ionicons } from '@expo/vector-icons'

interface Props{
  nombre:string
  icono?:string
}

export default function Time_form({nombre,icono}:Props) {

  return(
    <View style={GlobalStyles.input_form_box}>
        <TextInput style={GlobalStyles.input_form_text} placeholder={nombre}></TextInput>
         <Ionicons style={{marginTop:5}} size={20} name="time" color={"black"}></Ionicons>
    </View>
  )
}
import { Text } from 'react-native'
import React from 'react'
import { Colors } from '@/themes/Colors'
import { Pressable, TextInput } from 'react-native-gesture-handler'
import {  View, Image} from "react-native";

const Administrador = () => {
  return (
    <View>
      <View style={[{backgroundColor:Colors.azulOscuro}, {width:400}, {height:200}, {alignSelf:'center'}, {flexDirection:'column'}, {borderRadius:20}, {top:'10%'}]}>
      <Image source={require('../../assets/images/avatar.png')}  style={[{width:40}, {height:50}, {alignSelf:'center'}, {margin:10}]}/>
            <TextInput style={[{color:Colors.negro},{height:34},{fontWeight:'bold'}, {margin:5},{alignSelf:'center'}, {backgroundColor:Colors.fondo}, {borderRadius:10}, {width:200}, {fontSize:12}]} placeholder='Usuario'></TextInput>
            <TextInput style={[{color:Colors.negro},{height:34},{fontWeight:'bold'}, {margin:5},{alignSelf:'center'}, {backgroundColor:Colors.fondo}, {borderRadius:10}, {width:200}, {fontSize:12}]} placeholder='Contraseña' secureTextEntry></TextInput>
            <Pressable style={[{backgroundColor:Colors.verde}, {borderRadius:10}, {height:30}, {alignSelf:'center'}]}>
              <Text>Enviar</Text>
            </Pressable>
      </View>
    </View>
  )
}

export default Administrador
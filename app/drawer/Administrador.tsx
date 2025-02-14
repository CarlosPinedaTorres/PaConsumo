import { Text } from 'react-native'
import React from 'react'
import { Colors } from '@/themes/Colors'
import { Pressable, TextInput } from 'react-native-gesture-handler'
import {  View, Image} from "react-native";

const Administrador = () => {
  return (
    <View>
      <View style={[{backgroundColor:Colors.azulOscuro}, {width:1000}, {height:520}, {alignSelf:'center'}, {flexDirection:'column'}, {borderRadius:20}, {top:'10%'}]}>
            <Image source={require('../../assets/images/avatar.png')}  style={[{width:170}, {height:200}, {alignSelf:'center'}, {margin:20}]}/>
            <TextInput style={[{color:Colors.negro},{fontFamily:"InterExtraBold"},{height:74},{width:700}, {margin:1},{paddingLeft:15} ,{alignSelf:'center'}, {backgroundColor:Colors.fondo}, {borderRadius:10}, {fontSize:40}]} placeholder='Nombre'></TextInput>
            <TextInput style={[{color:Colors.negro},{height:74},{fontFamily:"InterExtraBold"}, {height:74},{width:700}, {paddingLeft:15} ,{margin:10},{alignSelf:'center'}, {backgroundColor:Colors.fondo}, {borderRadius:10}, {fontSize:40}]} placeholder='Contraseña' secureTextEntry></TextInput>
            <Pressable style={[{backgroundColor:Colors.verde}, {borderRadius:30}, {width:120},{height:70}, {alignSelf:'center'}, {padding:5}, {margin:15},{paddingHorizontal:10}, ]}>
              <Text style={[{fontWeight:'bold'},{fontSize:30}, {paddingTop:10}, {fontFamily:"InterExtraBold"}, {justifyContent:"center"}, {alignContent:"center"}, {textAlign:"center"}]}>Entrar</Text>
            </Pressable>
      </View>
    </View>
  )
}

export default Administrador
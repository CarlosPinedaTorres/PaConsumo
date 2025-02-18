import { Text } from 'react-native'
import React from 'react'
import { Colors } from '@/themes/Colors'
import {  View, Image, Alert } from "react-native";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/Firebaseconfig';
import { router } from 'expo-router';
import { Pressable, ScrollView, TextInput } from 'react-native-gesture-handler'

const Administrador = () => {

  // user = admin@paconsumo.com  password = paconsumo

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
    const login = async () => {
        try {
            const user = await (signInWithEmailAndPassword(auth, email, password));
            Alert.alert("Inicio de sesión correcto.")
            if (user) router.push("/drawer/Configuracion")
        } catch (error:any){
            console.log(error);
            Alert.alert("Inicio de sesión incorrecto", "error.message")
        }
    }

  return (
    <ScrollView>
      <View>
      <View style={[{backgroundColor:Colors.azulOscuro}, {width:1000}, {height:510}, {alignSelf:'center'}, {flexDirection:'column'}, {borderRadius:20}, {top:'10%'}]}>
            <Image source={require('../../assets/images/avatar.png')}  style={[{width:170}, {height:200}, {alignSelf:'center'}, {margin:20}]}/>
            <TextInput style={[{color:Colors.negro},{fontFamily:"InterExtraBold"},{height:74},{width:700}, {margin:1},{paddingLeft:15} ,{alignSelf:'center'}, {backgroundColor:Colors.fondo}, {borderRadius:10}, {fontSize:40}]} placeholder='Nombre' value={email} onChangeText={setEmail}></TextInput>
            <TextInput style={[{color:Colors.negro},{height:74},{fontFamily:"InterExtraBold"}, {height:74},{width:700}, {paddingLeft:15} ,{margin:10},{alignSelf:'center'}, {backgroundColor:Colors.fondo}, {borderRadius:10}, {fontSize:40}]} placeholder='Contraseña' secureTextEntry value={password} onChangeText={setPassword}></TextInput>
            <Pressable onPress={login} style={[{backgroundColor:Colors.verde}, {borderRadius:30}, {width:120},{height:70}, {alignSelf:'center'}, {padding:5}, {margin:15},{paddingHorizontal:10}, ]}>
              <Text style={[{fontWeight:'bold'},{fontSize:30}, {paddingTop:10}, {fontFamily:"InterExtraBold"}, {justifyContent:"center"}, {alignContent:"center"}, {textAlign:"center"}]}>Entrar</Text>
            </Pressable>
      </View>
    </View>
    </ScrollView>
  )
}

export default Administrador
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../themes/GlobalStyles";

export default function Boton_luz(){
    const [isPressed, setIsPressed] = useState(false);


    return(
    <View style={GlobalStyles.containerBotonLuz}>
                  
        <Pressable
            style={[GlobalStyles.botonLuz, { backgroundColor: isPressed ? "white" : "black" }]}
            onPress={() => setIsPressed(!isPressed)}
        >
            <View>
            <Ionicons style={{marginTop:5}} size={100} name="bulb-outline" color={isPressed ? "orange" : "grey"}></Ionicons>
            </View>
        </Pressable>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}> 
            <Text style={[GlobalStyles.textoConfiguracion,{color: isPressed ? "grey":"black"}]}>OFF  </Text>
            <Text style={[GlobalStyles.textoConfiguracion,{color: isPressed ? "red":"grey"}]}>ON   </Text>
        </View>
    
    </View>
    )
}
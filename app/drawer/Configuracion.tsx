import { View, Text } from 'react-native'
import React from 'react'
import GlobalStyles from '@/themes/GlobalStyles'
import Calendar_form from "../components/calendar_form";
import Time_form from "../components/time_form";


const Configuracion = () => {
  return (
    <View style={GlobalStyles.containerVerde}>
      <View style={{justifyContent:'space-evenly',flex:1}}>
        {/* <View>
          <Text style={GlobalStyles.textoConfiguracion}>Selecciona el día que deseas configurar</Text>
          <Calendar_form nombre='15/01/2025'></Calendar_form>
        </View> */}
        <View>
          <Text style={GlobalStyles.textoConfiguracion}>Inicio</Text>
          <Time_form nombre="10:00"></Time_form>
        </View>
        <View>
          <Text style={GlobalStyles.textoConfiguracion}>Fin</Text>
          <Time_form nombre='14:00'></Time_form>
        </View>
      </View>
    </View>
    
  )
}

export default Configuracion
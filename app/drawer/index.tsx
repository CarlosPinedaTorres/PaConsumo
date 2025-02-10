import { View, Text ,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import {
  BarChart,
} from "react-native-chart-kit";
import { Colors } from '@/themes/Colors';
const index = () => {
  const screenWidth=Dimensions.get("window").width
  const chartConfig = {
    backgroundGradientFrom: Colors.celadonClaro,
    backgroundGradientTo: Colors.celadonClaro,
    color: (opacity = 1) => (Colors.azulOscuro),
    labelColor: (opacity = 1) => (Colors.negro),
    fillShadowGradient:Colors.azulOscuro,
    fillShadowGradientOpacity: 1, 
    strokeWidth: 2,
    barPercentage: 1.0,
    decimalPlaces: 2,
  };
  const data = {
    labels: ["08:00", "08:05", "08:10", "08:15", "08:20", "08:25", "08:30", "08:35", "08:40", "08:45", "08:50", "08:55"],
    datasets: [
      {
        data: [120, 135, 150, 140, 155, 160, 145, 130, 125, 140, 150, 160] // Consumo en vatios
      }
    ]
  };
  
  return (
    <View style={styles.contenedorGrafico}>
    <BarChart
    data={data}
    width={screenWidth}
    height={220}
    yAxisLabel=""
    yAxisSuffix='W'
    chartConfig={chartConfig}
    verticalLabelRotation={20}
  />
  </View>
  )
}

const styles=StyleSheet.create({
  contenedorGrafico:{
    flex:1,
    alignItems:"center",
    alignContent:"center",
    justifyContent:"center",

  }
})
export default index
import { View, Text ,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import {
  BarChart,
} from "react-native-chart-kit";
import { Colors } from '@/themes/Colors';
const index = () => {
  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: Colors.celadonClaro,
    backgroundGradientTo: Colors.celadonClaro,
    color: (opacity = 1) => `rgba(0, 51, 102, ${opacity})`, 
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
    fillShadowGradient: Colors.azulOscuro,
    fillShadowGradientOpacity: 0.8, 
    strokeWidth: 2,
    barPercentage: 0.5, 
    decimalPlaces: 0,
  };

  const data = {
    labels: ["08:00", "08:05", "08:10", "08:15", "08:20", "08:25", "08:30", "08:35", "08:40", "08:45", "08:50", "08:55"],
    datasets: [
      {
        data: [120, 135, 150, 140, 155, 160, 145, 130, 125, 140, 150, 160],
      },
    ],
  };

  return (
    <View style={styles.contenedorGrafico}>
      <BarChart
        data={data}
        width={screenWidth * 0.95} 
        height={250} 
        yAxisLabel=""
        yAxisSuffix="W"
        chartConfig={chartConfig}
        verticalLabelRotation={5} 
        showValuesOnTopOfBars={true} 
        fromZero={true} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorGrafico: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
export default index
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Colors from '@/themes/Colors';

const Index = () => {
  const [wattValue, setWattValue] = useState(0);
  const [voltageValue, setVoltageValue] = useState(0); 

 
  const handleWattChange = (inputValue: any) => {
    const watt = parseInt(inputValue) || 0;
    setWattValue(watt);
  };


  const handleVoltageChange = (inputValue: any) => {
    const voltage = parseInt(inputValue) || 0;
    setVoltageValue(voltage);
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medidores</Text>

      <View style={styles.inputContainer}>
    
        <TextInput
          placeholder="Ingrese vatios"
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={handleWattChange}
        />
        
        <TextInput
          placeholder="Ingrese voltaje"
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={handleVoltageChange}
        />
      </View>

      <View style={styles.gaugeContainer}>
   
        <View style={styles.gaugeWrapper}>
          
          <Text style={styles.gaugeLabel}>Vatios</Text>
          <ProgressChart
            data={{
              labels: ['Watt'],
              data: [wattValue / 200]  
            }}
            width={screenWidth / 2 - 40} 
            height={400}
            strokeWidth={16}
            radius={150} 
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 2,

              color: (opacity = 1) => 
                wattValue < 50
              ? `rgba(${Colors.verdeGrafica}, ${opacity})` 
              : wattValue < 150
              ? `rgba(${Colors.naranjaGrafica}, ${opacity})` 
              : `rgba(${Colors.rojoGrafica}, ${opacity})`, 
              style: {
                borderRadius: 16,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
              },
            }}
          />
          <Text style={styles.valueLabel}>{wattValue}</Text>
        </View>

        <View style={styles.gaugeWrapper}>
      
          <Text style={styles.gaugeLabel}>Voltaje</Text>
          <ProgressChart
            data={{
              labels: ['Voltage'],
              data: [voltageValue /200]  
            }}
            width={screenWidth / 2 - 40} 
            height={400} 
            strokeWidth={16}
            radius={150} 
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 2,
              color: (opacity = 1) => 
                voltageValue < 100
              ? `rgba(${Colors.verdeGrafica}, ${opacity})` 
              : voltageValue < 150
              ? `rgba(${Colors.naranjaGrafica}, ${opacity})` 
              : `rgba(${Colors.rojoGrafica}, ${opacity})`, 
              style: {
                borderRadius: 16,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
              },
            }}
          />
          <Text style={styles.valueLabel}>{voltageValue}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 10,
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    marginBottom: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 40,
    fontSize: 16,
    marginHorizontal: 10,
    width: 120, 
    textAlign: 'center',
  },
  gaugeContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    
  },
  gaugeWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30, 
  },
  gaugeLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  valueLabel: {
    position: 'absolute',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Index;

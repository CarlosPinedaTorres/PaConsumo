import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Colors from '@/themes/Colors';
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/Firebaseconfig';

const Index = () => {
  const coleccionElectricidad=collection(db,'consumo')
  const [wattValue, setWattValue] = useState(150);
  const [voltageValue, setVoltageValue] = useState(30); 


  useEffect(() => {
    const unsubscribe = onSnapshot(coleccionElectricidad, (snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        
        if (data.power !== undefined) {
          setWattValue(data.power);
        }
  
        if (data.voltage !== undefined) {
          setVoltageValue(data.voltage);
        }
      });
    });
  
    return () => unsubscribe(); 
  }, []);


  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
  
      <View style={styles.gaugeContainer}>
   
        <View style={styles.gaugeWrapper}>
          
          <Text style={styles.gaugeLabel}>Vatios</Text>
          <ProgressChart
            data={{
              labels: ['Vatios'],
              data: [wattValue / 5000]  
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
                wattValue < 500
              ? `rgba(${Colors.verdeGrafica}, ${opacity})` 
              : wattValue < 1500
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
          <Text style={styles.valueLabel}>{wattValue}W</Text>
        </View>

        <View style={styles.gaugeWrapper}>
      
          <Text style={styles.gaugeLabel}>Voltaje</Text>
          <ProgressChart
            data={{
              labels: ['Voltage'],
              data: [voltageValue /5000]  
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
                voltageValue < 240
              ? `rgba(${Colors.verdeGrafica}, ${opacity})` 
              : voltageValue < 240
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
          <Text style={styles.valueLabel}>{voltageValue}V</Text>
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

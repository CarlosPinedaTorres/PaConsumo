import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GaugeComponent from 'react-gauge-component';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vatios</Text>
      <GaugeComponent
        value={120} 
        minValue={0}
        maxValue={200}
        arc={{
          colorArray: ['#00ff00', '#ffff00', '#ff0000'], 
          padding: 0.02,
        }}
        labels={{
      
          tickLabels: {
            type: 'inner',
            ticks: [
              { value: 100 },
              
            ],
          },
        }}
      />

   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Index;

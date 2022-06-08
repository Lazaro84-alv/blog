import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Meu primeiro App</Text>
      <Text style={styles.title}>Segundo Texto</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
  },
})
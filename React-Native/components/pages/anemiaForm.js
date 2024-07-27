// screens/AnemiaFormScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const AnemiaFormScreen = ({ route, navigation }) => {
//   const { tokenId } = route.params;
// const tokenId
  const [hemoglobin, setHemoglobin] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = () => {
    console.log('Token ID:', tokenId);
    console.log('Hemoglobin:', hemoglobin);
    console.log('Symptoms:', symptoms);
    // Implement submit logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anemia Form</Text>
      <Text style={styles.subtitle}>Token ID: </Text>
      <Slider
  style={{width: 200, height: 40}}
  minimumValue={0}
  maximumValue={1}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
/>

      <TextInput
        style={styles.input}
        placeholder="Symptoms"
        value={symptoms}
        onChangeText={setSymptoms}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default AnemiaFormScreen;

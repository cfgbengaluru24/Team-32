// screens/AnemiaFormScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import {saveAnaemiaLocally} from '../../hooks/pocDatahook'


const AnemiaFormScreen = ({ route, navigation }) => {
//   const { tokenId } = route.params;
// const tokenId
  const [hemoglobin, setHemoglobin] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [tokenId, settoken]=useState('');

  const handleSubmit = () => {
    console.log('Token ID:', tokenId);
    console.log('Hemoglobin:', hemoglobin);
    console.log('Symptoms:', symptoms);
    // Implement submit logic here
    saveAnaemiaLocally(tokenId,hemoglobin, symptoms, null);
    navigation.navigate("WelcomeDoc")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anemia Form</Text>
      <Text style={styles.subtitle}>Token ID: </Text>
      <TextInput
        style={styles.input}
        placeholder="tokenId"
        value={tokenId}
        onChangeText={settoken}
      />
      <Slider
  style={{width: 200, height: 40}}
  minimumValue={0}
  maximumValue={20}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
  
/>
<Text style={styles.subtitle}>Symptoms: </Text>
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

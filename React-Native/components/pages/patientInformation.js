// screens/PatientInformation.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PatientInformation = ({ navigation }) => {
  const [patientDetails, setPatientDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    age: '',
    weight: '',
    height: '',
    sex: '',
    bp: '',
    location: '',
  });

  const handleInputChange = (name, value) => {
    setPatientDetails({
      ...patientDetails,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Patient Details:', patientDetails);
    navigation.navigate('FormSelection', { patientDetails });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Data</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={patientDetails.firstName}
        onChangeText={(text) => handleInputChange('firstName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={patientDetails.lastName}
        onChangeText={(text) => handleInputChange('lastName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={patientDetails.phoneNumber}
        onChangeText={(text) => handleInputChange('phoneNumber', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="age"
        value={patientDetails.age}
        onChangeText={(text) => handleInputChange('age', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="weight"
        value={patientDetails.weight}
        onChangeText={(text) => handleInputChange('weight', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="height"
        value={patientDetails.height}
        onChangeText={(text) => handleInputChange('height', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="sex"
        value={patientDetails.sex}
        onChangeText={(text) => handleInputChange('sex', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="blood Pressure"
        value={patientDetails.bp}
        onChangeText={(text) => handleInputChange('bp', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="location"
        value={patientDetails.location}
        onChangeText={(text) => handleInputChange('location', text)}
        
      />
      
      
      {/* Add other inputs similarly */}
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default PatientInformation;

// screens/OralHealthScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, Dimensions } from 'react-native';
//import { v4 as uuidv4 } from 'uuid';
import { Button } from 'react-native-paper';
import {saveOralLocally} from '../../hooks/pocDatahook'


const { width, height } = Dimensions.get('window');
const OralHealthScreen = ({ navigation }) => {
  const [patientDetails, setPatientDetails] = useState({
    debrisIndex: '',
    calculusIndex:'',
    photo:'',
    

    
  });
  const [showAnemiaForm, setShowAnemiaForm] = useState(false);
  const [tokenId, setTokenId] = useState();

  const handleInputChange = (name, value) => {
    setPatientDetails({
      ...patientDetails,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Patient Details:', patientDetails);
    console.log('Token ID:', tokenId);
    saveOralLocally(null, patientDetails.tokenId, patientDetails.dIndex, patientDetails.cIndex)
    navigation.navigate('WelcomeDoc', { tokenId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oral Health Data Collection</Text>
      <TextInput
        style={styles.input}
        placeholder="debrisIndex"
        value={patientDetails.debrisIndex}
        onChangeText={(text) => handleInputChange('debrisIndex', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="calculusIndex"
        value={patientDetails.calculusIndex}
        onChangeText={(text) => handleInputChange('calculusIndex', text)}
      />
      
       <TextInput
        style={styles.input}
        placeholder="tokenId"
        value={patientDetails.phoneNumber}
        onChangeText={(text) => handleInputChange('tokenId', text)}
        keyboardType="numeric"
      />
      
      
      {/* <View style={styles.switchContainer}>
        <Text style={styles.label}>Show Anemia Form</Text>
        <Switch
          value={showAnemiaForm}
          onValueChange={setShowAnemiaForm}
        />
      </View>
      {showAnemiaForm && (
        <Button
          title="Go to Anemia Form"
          onPress={handleSubmit}
        />
      )} */}
      <Button title="Login" onPress={handleSubmit} mode="contained" 
        buttonColor='#023047'>Submit </Button>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    container: 2*height
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  label: {
    fontSize: 18,
    marginRight: 8,
  },
});

export default OralHealthScreen;

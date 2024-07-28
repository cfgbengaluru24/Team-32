import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PatientDataScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);

  const handleSubmit = async () => {
    try {
      console.log(searchQuery);
      if (searchQuery) {
        const data = await AsyncStorage.getItem("@offline_data_Loc_" + searchQuery);
        if (data) {
          let parsedData = JSON.parse(data);
          if (Array.isArray(parsedData)) {
            setFilteredPatients(parsedData);
          } else {
            setFilteredPatients([parsedData]);
          }
        } else {
          setFilteredPatients([]);
        }
      } else {
        setFilteredPatients([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setFilteredPatients([]);
    }
  };

  const renderPatient = ({ item }) => (
    <View style={styles.patientCard}>
      <Text style={styles.title}>{item.firstName} {item.lastName}</Text>
      <Text>Token ID: {item.tokenId}</Text>
      <Text>Age: {item.age}</Text>
      <Text>Sex: {item.sex}</Text>
      <Text>Location: {item.location}</Text>
      <Text>Phone Number: {item.phoneNumber}</Text>
      <Text>Height: {item.height}</Text>
      <Text>Weight: {item.weight}</Text>
      <Text>Blood Pressure: {item.bp}</Text>
      <Text>Anemia Diagnosis: {item.anemia.diagnosis}</Text>
      <Text>Anemia Treatment: {item.anemia.treatment}</Text>
      <Text>Anemia Hemoglobin: {item.anemia.haemoglobin.join(', ')}</Text>
      <Text>Oral Health C-Index: {item.oralHealIndex.cIndex.join(', ')}</Text>
      <Text>Oral Health D-Index: {item.oralHealIndex.dIndex.join(', ')}</Text>
      
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by Token ID"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSubmit} />
      <FlatList
        data={filteredPatients}
        renderItem={renderPatient}
        keyExtractor={(item) => item.tokenId?.toString() || Math.random().toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  patientCard: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PatientDataScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PatientInfo({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name: <Text style={styles.value}>{data.firstName}</Text></Text>
      <Text style={styles.label}>Last Name: <Text style={styles.value}>{data.lastName}</Text></Text>
      <Text style={styles.label}>Age: <Text style={styles.value}>{data.age}</Text></Text>
      <Text style={styles.label}>Gender: <Text style={styles.value}>{data.sex}</Text></Text>
      <Text style={styles.label}>Location: <Text style={styles.value}>{data.location}</Text></Text>
      <Text style={styles.label}>Phone Number: <Text style={styles.value}>{data.phoneNumber}</Text></Text>
      <Text style={styles.label}>Height: <Text style={styles.value}>{data.height} cm</Text></Text>
      <Text style={styles.label}>Weight: <Text style={styles.value}>{data.weight} kg</Text></Text>
      <Text style={styles.label}>Blood Pressure: <Text style={styles.value}>{data.bp}</Text></Text>
      <Text style={styles.label}>Anemia Diagnosis: <Text style={styles.value}>{data.anemia.diagnosis}</Text></Text>
      <Text style={styles.label}>Anemia Treatment: <Text style={styles.value}>{data.anemia.treatment}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontWeight: 'normal',
  },
});

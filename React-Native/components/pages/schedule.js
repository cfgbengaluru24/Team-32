// screens/ScheduleVisitScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// import { getData, saveData } from '../../storage'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data
const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Failed to save data', e);
  }
};

// Retrieve data
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.error('Failed to retrieve data', e);
  }
};

// Delete data
const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Failed to delete data', e);
  }
};
const ScheduleScreen= ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleSubmit = () => {
    alert(`Visit scheduled on ${date.toLocaleString()} at ${location}`);
    saveData("@scheduledVisits"+(new Date).getTime().toLocaleString(),JSON.stringify({location,date}));
    navigation.navigate('WelcomeDoc')
    console.log(date.toLocaleString())
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule Visit</Text>
      <View style={styles.inputContainer}>
        <Button onPress={showDatepicker} title="Select Date" />
        <Button onPress={showTimepicker} title="Select Time" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter Location"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 4,
  },
});

export default ScheduleScreen;


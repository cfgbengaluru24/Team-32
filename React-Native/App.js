import React, { useState } from 'react';
import {SafeAreaView, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';


import WelcomeScreen from './components/pages/welcomePage';
import HomeScreen from './components/pages';
import LoginScreen from './components/pages/login';
import PatientInformation from './components/pages/patientInformation';
import AnemiaFormScreen from './components/pages/anemiaForm';
import PocConnectPage from './components/pages/pocConnectPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ScheduleScreen from './components/pages/schedule';
import OralHealthScreen from './components/pages/oralForm';
import ChooseTypeOfInfo from './components/pages/ChooseTypeOfInfo';
import ScheduledVisitsScreen from './components/pages/ShowScheduledVisits';
import NextScreen from './components/pages/pocDataUpload';
import PatientDataScreen from './components/AnaylticsPage';

// import pateintInformation from './components/pages/patientInformation';

const Stack = createNativeStackNavigator();

function App() {

  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Rohini Oral Foundation</Text>
        <Text style={styles.subHeaderText}>Right to Oral Health</Text>
      </View>
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen}   options={{ headerShown: false,gestureEnabled:false }} />
        <Stack.Screen name="Login" component={LoginScreen}   options={{ headerShown: false,gestureEnabled:false }} />
        <Stack.Screen name="WelcomeDoc" component={WelcomeScreen}   options={{ headerShown: false,gestureEnabled:false }} />
        <Stack.Screen name="Schedule" component={ScheduleScreen}    options={{ headerShown: false }}  />
        <Stack.Screen name="patientInformation" component={PatientInformation} options={{headerShow:false}} />
        <Stack.Screen name="oralHealth" component={OralHealthScreen}    options={{ headerShown: false }}  />
        <Stack.Screen name="ChooseTypeOfInfo" component={ChooseTypeOfInfo}    options={{ headerShown: false }}  />
        <Stack.Screen name="ScheduledVisits" component={ScheduledVisitsScreen}    options={{ headerShown: false }}  />
        <Stack.Screen name="PocCamera" component={PocConnectPage}  options={{ headerShown: false }}/>
        <Stack.Screen name="AnemiaFormScreen" component={AnemiaFormScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="displayPhotoPage" component={NextScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="ViewAnalytics" component={PatientDataScreen}   options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  headerText: {
    fontSize: 30,
    color: '#00008B', // Dark blue color
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 21,
    color: '#ADD8E6', // Light blue color
    fontStyle: 'italic',
  },
});

export default App;



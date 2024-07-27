import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';


import WelcomeScreen from './components/pages/welcomePage';
import HomeScreen from './components/pages';
import LoginScreen from './components/pages/login';
import PatientInformation from './components/pages/patientInformation';
import AnemiaFormScreen from './components/pages/anemiaForm';
import PocConnectPage from './components/pages/pocConnectPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ScheduleVisitScreen from './components/pages/schedule';
import OralHealthScreen from './components/pages/oralForm';
import ChooseTypeOfInfo from './components/pages/ChooseTypeOfInfo';
import ScheduledVisitsScreen from './components/pages/ShowScheduledVisits';
import pateintInformation from './components/pages/patientInformation';
// import { registerBackgroundFetch } from './hooks/useNetworkMonitor';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen}   options={{ headerShown: false,gestureEnabled:false }} />
        <Stack.Screen name="Login" component={LoginScreen}   options={{ headerShown: false,gestureEnabled:false }} />
        <Stack.Screen name="WelcomeDoc" component={WelcomeScreen}   options={{ headerShown: false,gestureEnabled:false }} />
        <Stack.Screen name="Schedule" component={ScheduleVisitScreen}    options={{ headerShown: false }}  />
        <Stack.Screen name="oralHealth" component={OralHealthScreen}    options={{ headerShown: false }}  />
        <Stack.Screen name="ChooseTypeOfInfo" component={ChooseTypeOfInfo}    options={{ headerShown: false }}  />
        <Stack.Screen name="ScheduledVisits" component={ScheduledVisitsScreen}    options={{ headerShown: false }}  />
        <Stack.Screen name="PocCamera" component={PocConnectPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



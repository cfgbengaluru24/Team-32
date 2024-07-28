// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnemiaFormScreen from './components/pages/anemiaForm';
import LoginScreen from './components/pages/login';
import WelcomeScreen from'./components/pages/welcomePage';
import OralHealthScreen from './screens/OralHealthScreen';
import AnemiaFormScreen from './screens/AnemiaFormScreen';
import POCConnectScreen from './screens/POCConnectScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ScheduleVisit" component={ScheduleVisitScreen} />
        <Stack.Screen name="patientInformation" component={PatientInformation}/>
        <Stack.Screen name="OralHealth" component={OralHealthScreen} />
        <Stack.Screen name="AnemiaForm" component={AnemiaFormScreen} />
        <Stack.Screen name="POCConnect" component={POCConnectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

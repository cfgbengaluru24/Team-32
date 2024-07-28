import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
// Save dataimport { Button } from 'react-native-paper';
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
const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Simple validation for example purposes
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }

    
    console.log("ran");
    // const formData = new FormData();
    // formData.append("username",username);
    // formData.append("password",password);
    const response = await fetch('http://192.168.104.71:8080/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json' , 
        },
        body:JSON.stringify({username,password})
    })
    const responseData = await response.json();
    if(!response.ok){
        Alert.alert('Failure', `Invalid Credentials`);
        return;
    }
    Alert.alert('Success', `Welcome ${username}!`);
    console.log(responseData)
    saveData("isLogin","meghanaa");
    if(responseData.isAdmin){
    navigation.navigate("WelcomeDoc")
    }
    else{
      navigation.navigate("PocCamera")
    }
  };

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} mode="contained" 
        buttonColor='#023047'>Login </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;

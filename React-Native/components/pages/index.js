import React, { useEffect } from 'react';
import { Text, ImageBackground, StyleSheet, Dimensions, View } from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');
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
export default function HomeScreen({navigation}) {
  const router = useRouter();

  let isLogin=null;
  useEffect( async() => {
    let timer;

     isLogin = await getData("isLogin");
     console.log(isLogin);
    if(isLogin===null){
         timer = setTimeout(() => {
            navigation.navigate("Login");
          }, 10000);
    }
    else if(isLogin=="true"){
      timer = setTimeout(() => {
        navigation.navigate("PocCamera");
      }, 10000); 
    }
    else{
        timer = setTimeout(() => {
            navigation.navigate("WelcomeDoc");
          }, 10000);
    }
    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, [isLogin]);

  return (
    <View style={styles.titleContainer}>
      <ImageBackground
        source={require('../../assets/Kids.jpg')} // Correct path to the image
        style={styles.background}
      > 
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.text}>ROHINI</Text>
            <Text style={styles.textSmall}>Right to Oral Health Society!</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 40,
  },
  text: {
    color: 'white',
    fontSize: 60,
    fontStyle: 'italic',
  },
  textSmall: {
    color: 'white',
    fontSize: 40,
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 20,
  },
});

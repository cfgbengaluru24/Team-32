import React from 'react';
import { View, StyleSheet } from 'react-native';


import { Button } from 'react-native-paper';



const ChooseTypeOfInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        
        onPress={() => navigation.navigate('Screen1')}
        mode="contained" 
        buttonColor='#023047'
      >Oral Health</Button>
      <Button
        
        onPress={() => navigation.navigate('Screen2')}
        style={styles.button}
        mode="contained-tonal"
        buttonColor='#bde0fe'
      >Anaemia</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default ChooseTypeOfInfo;


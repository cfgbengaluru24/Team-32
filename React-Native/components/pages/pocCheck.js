import React from 'react';
import { View, StyleSheet } from 'react-native';


import { Button } from 'react-native-paper';



const ChooseTypeOfInfoPOC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        
        onPress={() => navigation.navigate('PocCamera')}
        mode="contained" 
        buttonColor='#023047'
      >Add details</Button>
      <Button
        
        onPress={() => navigation.navigate('AnemiaFormScreen')}
        style={styles.button}
        mode="contained-tonal"
        buttonColor='#bde0fe'
      >Upload All Data</Button>
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

export default ChooseTypeOfInfoPOC;


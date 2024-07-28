import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import {saveDataLocally} from '../../hooks/pocDatahook';


export default function NextScreen({ route, navigation }) {
    const { photoUri } = route.params;
    const [userInput, setUserInput] = useState('');

    const handleSubmit = async () => {
        try{
        await saveDataLocally(photoUri, userInput);
        navigation.navigate("PocCamera")
        }catch(e){
            console.log("Having errors!");
        }
    };


    return (
        <View style={styles.container}>
            <Image source={{ uri: photoUri }} style={styles.image} />
            <TextInput
                style={styles.input}
                placeholder="Enter patient Token ID"
                value={userInput}
                onChangeText={setUserInput}
            />
            <View style={styles.inputContainer}>
                <Button title="Submit" onPress={handleSubmit} mode="contained" 
        buttonColor='#023047'>Submit</Button>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent:"center"
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%',
        marginBottom: 16,
      },
});

import React, { useState } from 'react';
import { View, Image, TextInput, Button, StyleSheet } from 'react-native';

export default function NextScreen({ route, navigation }) {
    const { photoUri } = route.params;
    const [userInput, setUserInput] = useState('');

    const handleSubmit = async () => {
        await saveDataLocally(photoUri, userInput);
    }

    const pushData = async () => {
        await pushDataToAPI();
    }

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
                <Button title="Submit" onPress={handleSubmit} />
                <Button title="Push Data to API" onPress={pushData} />
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
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 16,
      },
});

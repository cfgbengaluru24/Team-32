import React, { useState } from 'react';
import { View, Image, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';


export async function saveDataLocally(photoUri, userInput) {
    try {
        const fileName = `image_${userInput}.jpg`;
        const fileUri = `${FileSystem.documentDirectory}${fileName}`;
        console.log('Saving image to:', fileUri);
        await FileSystem.copyAsync({ from: photoUri, to: fileUri });
        const data = {
            fileUri,
            userInput,
        };
        await AsyncStorage.setItem(`@offline_data_${Date.now()}`, JSON.stringify(data));
        Alert.alert('Offline', 'Data saved locally');
    } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to save data locally');
    }
};

export async function pushDataToAPI() {
    const keys = await AsyncStorage.getAllKeys();
    const offlineDataKeys = keys.filter(key => key.startsWith('@offline_data_'));
    console.log('Offline data keys:', offlineDataKeys);

    for (const key of offlineDataKeys) {
        try {
            const data = JSON.parse(await AsyncStorage.getItem(key));
            const fileUri = data.fileUri;
            const userInput = data.userInput;
            const fileData = await FileSystem.readAsStringAsync(fileUri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            const formData = new FormData();
            formData.append('file', {
                name: `image_${userInput}.jpg`,
                type: 'image/jpeg',
            });
            formData.append('userInput', userInput);
            const response = await fetch('https://example.com/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                console.log(`Successfully uploaded data with key: ${key}`);
                await AsyncStorage.removeItem(key);
            } else {
                console.error(`Failed to upload data with key: ${key}`);
            }
        } catch (error) {
            console.error(`Error uploading data with key: ${key}`, error);
        }
    }
};

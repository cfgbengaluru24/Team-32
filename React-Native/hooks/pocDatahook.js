import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

export async function saveDataLocally(photoUri, userInput) {
  try {
    const fileName = `image_${userInput}.jpg`;
    console.log(fileName);
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;
    console.log("Saving image to:", fileUri);
    if(photoUri){
    await FileSystem.copyAsync({ from: photoUri, to: fileUri });
    }
    const data = {
      fileUri,
      userInput,
    };
    await AsyncStorage.setItem(
      `@offline_data_${Date.now()}`,
      JSON.stringify(data)
    );
    Alert.alert("Offline", "Data saved locally");
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Failed to save data locally");
  }
}

export async function saveLocLocally(data) {
  try {
    console.log("Here" + data);
    await AsyncStorage.setItem(
      `@offline_data_Loc_${data.tokenId}`,
      JSON.stringify(data)
    );
    Alert.alert("Offline", "Data saved locally");
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Failed to save data locally");
  }
}

export async function saveOralLocally(photoUri, userInput, dIndex, cIndex) {
  try {
    const fileName = `image_${userInput}.jpg`;
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;
    console.log("Saving image to:", fileUri);
    if(fileUri){
    await FileSystem.copyAsync({ from: photoUri, to: fileUri });
    }
    const data = {
      fileUri,
      userInput,
      dIndex,
      cIndex,
    };
    await AsyncStorage.setItem(
      `@offline_data_oral_${Date.now()}`,
      JSON.stringify(data)
    );
    Alert.alert("Offline", "Data saved locally");
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Failed to save data locally");
  }
}

export async function saveAnaemiaLocally(
  userInput,
  haemoglobin,
  diagnosis,
  treatment
) {
  try {
    const data = {
      userInput,
      haemoglobin,
      diagnosis,
      treatment,
    };
    await AsyncStorage.setItem(
      `@offline_data_anaemia_${Date.now()}`,
      JSON.stringify(data)
    );
    Alert.alert("Offline", "Data saved locally");
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Failed to save data locally");
  }
}

export async function saveInitialDataLocally(
  firstName,
  lastName,
  phoneNumber,
  age,
  weight,
  height,
  sex,
  bp,
  location,
  userInput
) {
  try {
    const data = {
      firstName,
      lastName,
      phoneNumber,
      age,
      weight,
      height,
      sex,
      bp,
      location,
      userInput,
    };
    await AsyncStorage.setItem(
      `@offline_data_demo_${Date.now()}`,
      JSON.stringify(data)
    );
    Alert.alert("Offline", "Data saved locally");
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Failed to save data locally");
  }
}

export async function pushInitialToAPI(
  firstName,
  lastName,
  phoneNumber,
  age,
  weight,
  height,
  sex,
  bp,
  location,
  userInput
) {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const offlineDataKeys = keys.filter((key) =>
      key.startsWith("@offline_data_demo_")
    );
    console.log("Offline data keys:", offlineDataKeys);
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Failed to save data locally");
    for (const key of offlineDataKeys) {
      try {
        const data = JSON.parse(await AsyncStorage.getItem(key));
        const userInput = data.userInput;
        const firstName = data.firstName;
        const lastName = data.lastName;
        const phoneNumber = data.phoneNumber;
        const age = age;
        const weight = weight;
        const height = height;
        const sex = sex;
        const bp = bp;
        const location = location;
        const formData = new FormData();
        formData.append("tokenId", userInput);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("phoneNumber", phoneNumber);
        formData.append("age", age);
        formData.append("weight", weight);
        formData.append("height", height);
        formData.append("sex", sex);
        formData.append("bp", bp);
        formData.location("location", location);

        const response = await fetch(
          "http://192.168.104.71:8080/post_patient_data",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

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
  }
}

export async function pushDataToAPI() {
  const keys = await AsyncStorage.getAllKeys();
  const offlineDataKeys = keys.filter((key) =>
    key.startsWith("@offline_data_")
  );
  console.log("Offline data keys:", offlineDataKeys);

  for (const key of offlineDataKeys) {
    try {
      const data = JSON.parse(await AsyncStorage.getItem(key));
      const fileUri = data.fileUri;
      const userInput = data.userInput;
      try {
        const fileData = await FileSystem.readAsStringAsync(fileUri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        const formData = new FormData();
        formData.append("file", {
          name: `image_${userInput}.jpg`,
          type: "image/jpeg",
        });
        formData.append("tokenId", userInput);

        const response = await fetch(
          "http://192.168.104.71:8080/post_upload_images",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          console.log(`Successfully uploaded data with key: ${key}`);
          await AsyncStorage.removeItem(key);
        } else {
          console.error(`Failed to upload data with key: ${key}`);
        }
      } catch (error) {
        console.log("Data not to Push");
        
      }
    } catch (e) {
      console.error(`Error uploading data with key: ${key}`, error);
    }
  }
}

export async function pushOralDataToAPI() {
  const keys = await AsyncStorage.getAllKeys();
  const offlineDataKeys = keys.filter((key) =>
    key.startsWith("@offline_data_oral_")
  );
  console.log("Offline data keys:", offlineDataKeys);

  for (const key of offlineDataKeys) {
    try {
      const data = JSON.parse(await AsyncStorage.getItem(key));
      const fileUri = data.fileUri;
      const userInput = data.userInput;
      const fileData = await FileSystem.readAsStringAsync(fileUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const formData = new FormData();
      formData.append("file", {
        name: `image_${userInput}.jpg`,
        type: "image/jpeg",
      });
      formData.append("tokenId", userInput);
      const dIndex = data.dIndex;
      const cIndex = data.cIndex;
      formData.append("dIndex", dIndex);
      formData.append("cIndex", cIndex);

      const response = await fetch(
        "http://192.168.104.71:8080/post_oral_details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

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
}

export async function pushAnaemiaDataToAPI() {
  const keys = await AsyncStorage.getAllKeys();
  const offlineDataKeys = keys.filter((key) =>
    key.startsWith("@offline_data_anaemia_")
  );
  console.log("Offline data keys:", offlineDataKeys);

  for (const key of offlineDataKeys) {
    try {
      const data = JSON.parse(await AsyncStorage.getItem(key));
      const userInput = data.userInput;
      const formData = new FormData();
      const haemoglobin = data.haemoglobin;
      const diagnosis = data.diagnosis;
      const treatment = data.treatment;
      formData.append("tokenId", userInput);
      formData.append("haemoglobin", haemoglobin);
      formData.append("diagnosis", diagnosis);
      formData.append("treatment", treatment);

      const response = await fetch(
        "http://192.168.104.71:8080/post_anemia_details ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

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
}

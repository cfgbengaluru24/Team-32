// screens/WelcomeScreen.tsx
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { Button, Card, IconButton } from "react-native-paper";
import { Image, Text } from "react-native";
import {pushInitialToAPI,pushDataToAPI,pushOralDataToAPI,pushAnaemiaDataToAPI} from  '../../hooks/pocDatahook';

const ImageButton = ({ navigation, navigateTo, imageSource, text }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigateTo)}
      style={styles2.button}
    >
      <View style={styles2.content}>
        <Image source={imageSource} style={styles2.image} />
        <Text style={styles2.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles2 = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    textAlign: "center",
    borderBlockColor: "black",
    // borderColor:"#000000",
    // borderStyle:'solid'
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    alignItems: "center",
    gap: "7",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "#023047",
  },
});

const MyComponent = ({ navigation }) => (
  <Card color="#FFFFFF">
    <Card.Actions>
      <ImageButton
        text="Schedule Visit"
        imageSource={require("../../assets/Calendar.png")}
        navigateTo="Schedule"
        navigation={navigation}
      />
      <ImageButton
        text="Scheduled Visits"
        imageSource={require("../../assets/timer.jpg")}
        navigateTo="ScheduledVisits"
        navigation={navigation}
      />
    </Card.Actions>
    <Card.Actions>
      <ImageButton
        text="Diagnose"
        imageSource={require("../../assets/diagnosis.png")}
        navigateTo="patientInformation"
        navigation={navigation}
      />
      <ImageButton
        text="View Analytics"
        imageSource={require("../../assets/Analytics.jpg")}
        navigateTo="ViewAnalytics"
        navigation={navigation}
      />
    </Card.Actions>
  </Card>
);

const WelcomeScreen = ({ route, navigation }) => {
  const username = "test";
  async function handleSubmit() {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        pushInitialToAPI();
        pushDataToAPI();
        pushOralDataToAPI();
        pushAnaemiaDataToAPI();
        console.log("Internet is connected");
      } else {
        console.log("No internet connection");
      }
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Doctor</Text>
      <MyComponent navigation={navigation} />
      <Button
        title="Push All Data"
        style={styles.button}
        onPress={handleSubmit}
        mode="contained"
        buttonColor="#023047"
      >
        Push All Data
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    position: "relative",
    top: -100,
  },
  button: {
    margin: 25,
    border: "solid",
  },
});

export default WelcomeScreen;

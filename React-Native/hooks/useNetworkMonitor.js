import * as BackgroundFetch from 'expo-background-fetch';
import * as Network from 'expo-network';

const performBackgroundTask = async () => {
  console.log('Background fetch task running...');

  // Check if the device is connected to the internet
  const networkState = await Network.getNetworkStateAsync();
  if (networkState.isConnected) {
    console.log('Device is online. Performing background task...');
    await fetchData();
  } else {
    console.log('Device is offline. No task performed.');
  }
};

const fetchData = async () => {
  try {
    const response = await fetch('http://192.168.104.71:8080/login',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({"username":"meghanaa","password":"pwdd"})
    });
    const data = await response.json();
    console.log('Data fetched successfully:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Register the background fetch task
export const registerBackgroundFetch = async () => {
  await BackgroundFetch.registerTaskAsync('background-fetch-task', {
    minimumInterval: 15 * 60, // 15 minutes
    stopOnTerminate: false,
    startOnBoot: true,
  });
};

// Define the background fetch task
BackgroundFetch.defineTask(async () => {
  await performBackgroundTask();
});


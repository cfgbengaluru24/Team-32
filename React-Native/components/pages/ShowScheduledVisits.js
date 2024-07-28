import * as React from 'react';
import { DataTable } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveLocLocally } from '../../hooks/pocDatahook';
const ScheduledVisitsScreen = () => {
  const [items, setItems] = React.useState([

  ]);
  
  const date = (new Date);
  React.useEffect(() => {
    const getKeys = async () => {
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys)
      let useFullKeys = keys?.filter(key => key.startsWith("@scheduledVisits"));
      let itemsList = [];
      for (const key of useFullKeys) {
        const data = JSON.parse(await AsyncStorage.getItem(key));
        console.log(data);
        if(data.date){
        itemsList.push({"Location":data.location,"Date":data.date});
        const userInfo =  await fetch("http://192.168.104.71:8080/data/loc/"+data.location)
        let userData = await userInfo.json();
        userData = JSON.stringify(userData);
        userData = JSON.parse(userData);
       
        for(let i=0;i<userData.length;i++){
        saveLocLocally(userData[i]);
        console.log(userData[i]);
        }
      }
        
      }


      setItems(itemsList);
      
    }
    getKeys();
  }, []); // Only run on mount

 
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Location</DataTable.Title>
        <DataTable.Title>Date</DataTable.Title>
      </DataTable.Header>

      {items.map((item) => (
        <DataTable.Row key={item.Location}>
          <DataTable.Cell>{item.Location}</DataTable.Cell>
          <DataTable.Cell>{item.Date}</DataTable.Cell>
        </DataTable.Row>
      ))}

   
    </DataTable>
  );
};

export default ScheduledVisitsScreen;
